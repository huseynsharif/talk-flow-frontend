import React, { useState, useEffect } from 'react';
import { Stomp } from '@stomp/stompjs';
import { SOCKET_BASE_URL } from '../constants/apiConstants';
import { Button, Container, Input, Label } from 'semantic-ui-react';

const ChatRoom = () => {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        const socket = new WebSocket(SOCKET_BASE_URL + '/chat');
        const client = Stomp.over(socket);
        client.connect({}, (frame) => {

            setStompClient(client);
            let roomName = localStorage.getItem('room-name')
            client.subscribe('/topic/message/' + roomName, (message) => {
                const receivedData = JSON.parse(message.body);
                setMessages((prevMessages) => [...prevMessages, receivedData.message]);
            });
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
            }
        };
    }, []);

    const handleEnter = (event) => {
        if (event.key == 'Enter') {
            sendMessage()
        }
    }

    const sendMessage = () => {
        if (!messageInput || messageInput.trim() === '') {
            return;
        }

        if (stompClient) {
            let roomName = localStorage.getItem('room-name')
            let username = localStorage.getItem('username')

            const data = {
                senderName: username,
                message: messageInput,
                roomName: roomName,
            };
            stompClient.send('/chat', {}, JSON.stringify(data));
            setMessageInput('');
        }
    };

    return (
        <Container>
            <h1 className='c'>Chat Room</h1>
            <div className="message-list">
                {messages.map((msg, index) => (
                    <div className="mes" key={index}><p>{msg}</p></div>
                ))}
            </div>
            <div className='message-input'>
                <div className="Message">
                    <input
                        placeholder="Message.." className="MsgInput" type="text"
                        value={messageInput}
                        onChange={(value) => setMessageInput(value.target.value)}
                        onKeyDown={(event) => handleEnter(event)}
                        title="Write Message" tabindex="i" pattern="\d+"
                    />


                    <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet" className="SendSVG" >
                        <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#6407F0" stroke="none">
                            <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
                        </g>
                    </svg><span class="l"></span>

                </div>
            </div>
        </Container>
    );
};

export default ChatRoom;
