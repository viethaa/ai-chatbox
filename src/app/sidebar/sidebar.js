'use client';
import React, { useState } from "react";
import './sidebar.css'

export default function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <ul>
                    <li className="active">
                        <span className="sidebar-icon">+</span>
                        <span>New Chat</span>
                    </li>
                    <li>
                        <span className="sidebar-icon">☰</span>
                        <span>History</span>
                    </li>
                    <li>
                        <span className="sidebar-icon">⚙</span>
                        <span>Settings</span>
                    </li>
                </ul>

                <ul className="lower-sidebar">
                    <li>
                        <span className="sidebar-icon">∞</span>
                        <span>Unlimited Access</span>
                    </li>
                    <li>
                        <span className="sidebar-icon">⎔</span>
                        <span>Powered by Spice AI</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
