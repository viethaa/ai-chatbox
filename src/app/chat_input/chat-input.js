'use client';
import React, { useState } from "react";
import './chat-input.css'

export default function ChatInput() {
    const [userChat, setUserChat] = useState("");
    const [userDialog, setUserDialog] = useState(["Hello! How can I help you today?"]);

    function handleChatChange(e) {
        setUserChat(e.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        if (userChat.trim() === "") return; // Prevent sending empty messages
        setUserDialog([...userDialog, userChat]);
        setUserChat(""); // Clear input after sending message
    };

    return (
        <div className="chat-wrapper">
            <div className="chat-container">
                <div className="chat-box" id="chat-box">
                    {userDialog.map((dialog, index) => (
                        <div 
                            key={index} 
                            className={`message ${index === 0 ? 'ai-message' : 'user-message'}`}
                        >
                            {dialog}
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
