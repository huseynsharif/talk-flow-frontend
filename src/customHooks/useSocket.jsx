import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import { SOCKET_BASE_URL } from '../constants/apiConstants';


export default function useSocket() {
    const [socket, setSocket] = useState(null);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let room = "test"
    let k = 1;
    useEffect(() => {

        if (!socket) {
            const newSocket = io(SOCKET_BASE_URL, {
              query: { room },
            });
      
            newSocket.on('connect', () => {
              console.log('WebSocket bağlantısı kuruldu.');
            });
      
            newSocket.on('get_message', (receivedMessage) => {
              setMessages((prevMessages) => [...prevMessages, receivedMessage.message]);
            });
      
            setSocket(newSocket);
      
            return () => {
              newSocket.disconnect();
            };
          }

    }, [socket, room]
    );

    const sendMessage = () => {
        if (socket && message) {
            console.log(message);
            console.log(socket);
            socket.emit('send_message', { message, room });
            setMessage('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((m, id) => (
                    <div key={id}>
                        <p>{m}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(value) => setMessage(value.target.value)}
            />
            <button onClick={() => sendMessage()}>Send</button>
        </div>
    );

}
