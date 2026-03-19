"use client";

import React from 'react';
import { FaInstagram, FaSpotify, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa6';

const SocialDock = () => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rafabragacantor/",
      icon: <FaInstagram size={20} />
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/5XxPfh8njv8xZ2QIUd9H7t?si=AuZ1hHf1RquIu4VBAO9vVw",
      icon: <FaSpotify size={20} />
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@RafaBragaCantor",
      icon: <FaYoutube size={20} />
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rafasentimento/",
      icon: <FaFacebook size={20} />
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@rafabragacantor",
      icon: <FaTiktok size={20} />
    }
  ];

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-60 hidden lg:flex flex-col gap-4 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 group"
          aria-label={social.name}
        >
          {social.icon}
          {/* Tooltip opcional */}
          <span className="absolute left-16 bg-white text-black text-[10px] font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest whitespace-nowrap">
            {social.name}
          </span>
        </a>
      ))}
    </aside>
  );
};

export default SocialDock;
