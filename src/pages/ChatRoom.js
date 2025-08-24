import { useState, useEffect } from 'react';
import './ChatRoom.css'
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function ChatRoom({ user }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => socket.off('receive_message');
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            const msgData = {
                sender: user.username,
                content: message,
                timestamp: new Date(),
            };
            socket.emit('send_message', msgData);
            setMessages((prev) => [...prev, msgData]);
            setMessage('');
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="default avatar" className="avatar" />
                <h2 >{user.username}</h2>
                <p>{user.email}</p>
                <p>Status: {user.status}</p>

            </div>
            <div className="chatArea">
                <div className="messageFeed">
                    <div>
                        {/* <strong>{msgData.sender}: last message</strong> */}
                        {messages.map((msg, idx) => (
                            <div key={idx} className="message">
                                <strong>{msg.sender}:</strong> {msg.content}
                            </div>
                        ))}

                    </div>
                </div>
                <div className="inputArea">
                    <input value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text" placeholder="Type your message..." className="input" />
                    <button onClick={sendMessage} className="button">Send</button>
                </div>
            </div>
        </div>
    )
}