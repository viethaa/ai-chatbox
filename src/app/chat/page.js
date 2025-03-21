'use client';
import React, { useState } from "react";
import './chat.css'
import Sidebar from '../sidebar/sidebar'
import Topbar from '../topbar/topbar'
import ChatInput from "../chat_input/chat-input";

export default function ChatBox() {
    return (
        <React.Fragment>
            <Topbar/>
            <div className="all-container">
                <Sidebar/>
                <ChatInput/>
            </div>
        </React.Fragment>
    )
}