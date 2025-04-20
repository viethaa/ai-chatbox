'use client';
import React, { useState } from "react";
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import StoriesCard from '../stories_card/stories_card';
import ChatInput from '../chat_input/chat-input';
import Grid from '@mui/material/Grid';
import Box from '@mui/joy/Box';
import { Link } from "react-router";

export default function StoryPage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-[100px]">
                <Topbar />
            </div>
            <div className="flex flex-1">
                <Sidebar className="flex-1" />
                <Grid container spacing={4} justifyContent="center" className="flex-5 px-4 py-6">
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className="box-card">
                            <ChatInput/>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}