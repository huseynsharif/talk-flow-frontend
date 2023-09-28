import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import { SOCKET_BASE_URL } from '../constants/apiConstants';
import { socket } from './socket';
import { ConnectionManager } from './ConnectionManager';


export default function useSocket() {
  //const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  let room = "test"


  useEffect(() => {

      function onConnect() {
        setIsConnected(true);
        console.log("connected");
      }

      function onDisconnect() {
        setIsConnected(false);
        console.log("disconnected");
      }

      function onMessageRecived(receivedMessage) {
        setMessages((prevMessages) => [...prevMessages, receivedMessage.content]);
      }
      
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('get_message', onMessageRecived);
     

      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        socket.off('get_message', onMessageRecived);
      };
    

  }, [socket, room]
  );

  const sendMessage = () => {
    if (socket && message) {
      console.log(message);
      console.log(socket);
      console.log(isConnected);
      socket.timeout(5000).emit('send_message', {
        content: message
      }, () => {
        console.log("Mesaj getdi.");
      });
      setMessage('');
    }
  };

  return (
    <div>
      <ConnectionManager/>
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
      <button onClick={sendMessage}>Send</button>
    </div>
  );

}
