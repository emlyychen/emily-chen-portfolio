"use client";
import { InstagramEmbed } from 'react-social-media-embed';
import "../css/music.css"

export default function Music(){
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" id='insta-post'/>
        </div>
    )
}