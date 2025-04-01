'use client';
import React, { useState } from "react";
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import StoriesCard from '../stories_card/stories_card';
import ChatInput from '../chat_input/chat-input';
import Grid from '@mui/material/Grid';
import Box from '@mui/joy/Box';
import { Link } from "react-router";

const stories = [
    {
        title: "Sơn Tinh, Thuỷ Tinh",
        description: "A fierce erupts battle between the Mountain God, Sơn Tinh, and the Water God, Thuỷ Tinh, for the hand of Princess Mỵ Nương, daughter of the Hùng King",
        imageURL: "https://lh3.googleusercontent.com/proxy/WfESlQBrd31H1nqhM2UXLyrzQEjgiJZ2vjDRvfdB0C9KM8bI4ANM5CxSjpE6MU4aRvtJUIjJY83jcU79u8E8zFCY3jiR2b4GPJMeEtTqhghvLkLBaDH27B3D9LGLYZlTj6YEjGt-uyvKk_NMzANYZBtvKpn4",
        "path": "bvis-xmas-fair"
    },
    {
        title: "Lạc Long Quân & Âu Cơ",
        description: "Lạc Long Quân, a powerful dragon king, and Âu Cơ, a celestial fairy, defied the boundaries of their realms to birth a hundred children, Vietnam's ancestors",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MMQDP9Eykn5VY5G4lxLA6w_JBmAHcK6SLQ&s",
        "path": "bakesale"
    },
    {
        title: "Hai Bà Trưng",
        description: "The Hai Bà Trưng, Trưng Trắc and Trưng Nhị, were two sisters who led a rebellion against the Chinese Han dynasty in 40 AD. They now recognized as national heroines",
        imageURL: "https://vov2.vov.vn/sites/default/files/images/Khoi%20nghia%20HBT.jpg",
        "path": "service-fair"
    },
    {
        title: "An Dương Vương and the Magic Crossbow",
        description: "Gifted by a golden turtle spirit, An Dương Vương's magic crossbow made his kingdom invincible. But betrayal from...",
        imageURL: "https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/anduongvuong-mychau.jpg",
        "path": "bvis-xmas-fair"
    },
    {
        title: "Lê Lợi and the Magic Sword (Thuận Thiên)",
        description: "Lê Lợi's rebellion against the Ming Dynasty was fueled by Thuận Thiên, a magic sword from the Dragon King. After victory...",
        imageURL: "https://vnreview.vn/attachments/1730968489899-png.24415/",
        "path": "bakesale"
    },
    {
        title: "Sự Tích Bánh Chưng, Bánh Dày",
        description: "King Hung, seeking a successor, tasked his sons with a special offering; while his other sons sought exotic delicacies...",
        imageURL: "https://thegioicotich.vn/wp-content/uploads/2010/08/truyen-su-tich-banh-chung-banh-day.png",
        "path": "service-fair"
    },
];

export default function ChatBox() {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-[100px]">
                <Topbar />
            </div>
            <div className="flex flex-1">
                <Sidebar className="flex-1" />
                <Grid container spacing={4} justifyContent="center" className="flex-5 px-4 py-4">
                    {stories.map((data, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className="box-card">
                                <StoriesCard
                                    className="news-card-content"
                                    imageLink={data.imageURL}
                                    title={data.title}
                                    description={data.description}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}