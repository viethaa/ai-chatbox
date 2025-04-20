'use client';
import React from "react";

export default function Topbar() {
    return (
        <React.Fragment>
            <nav className="bg-gray-800">
                <div className="mx-auto w-full flex px-2 sm:px-6 lg:px-8">
                    <div className="flex-9 flex items-center justify-between h-16">
                        <div className="flex shrink-0 items-center gap-3">
                            <img className="h-11 w-auto" src="assets/logo.webp" alt="Your Company" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#383b71] via-[#a3a6d6] to-white font-semibold text-[21px] tracking-wider" style={{ fontFamily: "'Fira Sans', sans-serif" }}>Loremi</span>
                            <span
                                className="inline-flex items-center rounded-md bg-[#2b2d31] bg-opacity-70 px-2.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20 tracking-wide"
                            >
                                v1.0.0
                            </span>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md bg-[#5a5e9e] px-3 py-2 text-sm font-medium text-white" aria-current="page">Library</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">What's New?</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                            {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div> */}
            </nav>
        </React.Fragment>
    );
}
