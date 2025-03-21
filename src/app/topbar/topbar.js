'use client';
import React from "react";

export default function Topbar() {
    return (
        <div className="w-full bg-[#171847] mt-4 mb-4">
            <div className="bg-[#383b71] p-6 mx-4 cursor-pointer transition-all duration-200 ease-in-out rounded-lg flex items-center border-2 border-white/10">
                <nav className="w-full h-18 flex gap-8 justify-between">
                    <div className="flex items-center text-white text-lg">
                        <img className="mr-4 opacity-80 h-6 w-6" src="assets/Home Icon.png" alt="Home Icon" />
                        <a href="#home" className="hover:text-gray-300">Home</a>
                    </div>
                    <div className="flex items-center text-white text-lg">
                        <img className="mr-4 opacity-80 h-6 w-6" src="assets/Testing Icons.png" alt="Test Icon" />
                        <a href="#code" className="hover:text-gray-300">Test</a>
                    </div>
                    <div className="flex items-center text-white text-lg">
                        <img className="mr-4 opacity-80 h-6 w-6" src="assets/Completed Icons & Symbols.png" alt="Completion Icon" />
                        <a href="#dataset" className="hover:text-gray-300">Completion</a>
                    </div>
                    <div className="flex items-center text-white text-lg">
                        <img className="mr-4 opacity-80 h-6 w-6" src="assets/Icons and Symbols Info.png" alt="About Us Icon" />
                        <a href="#playground" className="hover:text-gray-300">About Us</a>
                    </div>
                    <div className="flex items-center text-white text-lg">
                        <img className="mr-4 opacity-80 h-6 w-6" src="assets/Update Icon.png" alt="Update Log Icon" />
                        <a href="#update-log" className="hover:text-gray-300">Update Log</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
