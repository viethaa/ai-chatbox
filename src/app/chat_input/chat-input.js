'use client';
import React, { useState, useRef, useEffect } from "react";
import './chat-input.css'

export default function ChatInput() {
    const [userChat, setUserChat] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! I am your friendly AI assistant, Loremi. Do you have any specfic questions about anything, or do you want me to read you a story?", isAi: true }
    ]);
    const chatBoxRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    function handleChatChange(e) {
        setUserChat(e.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        if (userChat.trim() === "") return; // Prevent sending empty messages
        
        // Add user message
        setMessages([...messages, { text: userChat, isAi: false }]);
        
        // Simulate AI response (in a real app, this would be an API call)
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "This is a simulated AI response to your message.", 
                isAi: true 
            }]);
        }, 1000);
        
        setUserChat(""); // Clear input after sending message
    };

    return (
        <div className="chat-wrapper">
            <div className="chat-container">
                <div className="chat-box" ref={chatBoxRef}>
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`message ${msg.isAi ? 'ai-message' : 'user-message'}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input-container">
                    <form className="chat-input" onSubmit={sendMessage}>
                        <input 
                            type="text" 
                            id="user-input" 
                            placeholder="Type a message..." 
                            value={userChat} 
                            onChange={handleChatChange} 
                        />
                        <button type="submit">→</button>
                    </form>
                </div>
            </div>
        </div>
    );
}