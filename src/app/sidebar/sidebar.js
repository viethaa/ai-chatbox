'use client';
import React, { useState } from "react";
import './sidebar.css'

export default function Sidebar({ className }) {
    return (
        <React.Fragment>
            <div className={`${className}  sidebar bg-#171847 px-4 py-4 h-full shadow-md`}>
                <div className="h-full flex flex-col justify-between align-center px-4 border-r-4 border-white/10">
                    <ul className="">
                        <li className="active">
                            <span className="sidebar-icon">+</span>
                            <span>Search</span>
                        </li>
                        <li>
                            <span className="sidebar-icon">☰</span>
                            <span>Favorites</span>
                        </li>
                        <li>
                            <span className="sidebar-icon">⚙</span>
                            <span>Settings</span>
                        </li>
                    </ul>

                    <ul className="">
                        <li>
                            <span className="sidebar-icon">∞</span>
                            <span>Unlimited Access</span>
                        </li>
                        <li>
                            <span className="sidebar-icon">⎔</span>
                            <span>Fueled by Spice AI</span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
