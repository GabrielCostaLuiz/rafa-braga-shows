"use client";

import React from 'react';

const SocialDock = () => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rafabragacantor/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/5XxPfh8njv8xZ2QIUd9H7t?si=AuZ1hHf1RquIu4VBAO9vVw",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.215.353-.674.464-1.027.248-2.853-1.743-6.444-2.137-10.672-1.171-.403.092-.806-.157-.899-.558-.092-.401.157-.804.558-.897 4.622-1.056 8.586-.61 11.785 1.346.353.216.464.675.248 1.028v.004zm1.465-3.264c-.269.438-.84.577-1.278.308-3.265-2.007-8.243-2.59-12.102-1.418-.49.149-1.009-.131-1.158-.621-.149-.49.131-1.009.621-1.158 4.414-1.34 9.904-.69 13.61 1.589.438.269.577.84.308 1.278l-.001.022zm.126-3.375C15.018 8.204 8.305 7.982 4.428 9.158c-.613.186-1.258-.168-1.444-.781-.186-.613.168-1.258.781-1.444 4.444-1.348 11.85-1.087 16.545 1.701.55.326.732 1.036.406 1.586-.326.549-1.036.731-1.586.405l-.03-.016z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC5FjTyq6fHyrdZA15C-Luig/videos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rafasentimento/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@rafabragacantor?_t=8rKXgKuimWN&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnvHx7AK7zknYv5S41EyV3EcJl6dUiyUEt4RO7s5eMHYsPeUI6vD6ft_11PWk_aem_mwhivg1-5eVk79z5UKxasg",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.39a6.252 6.252 0 0 1-2.07-2.07c-.01.39-.01 19.34-.01 19.34-1.16 3.02-4.1 4.72-7.39 4.31-2.91-.36-5.46-2.52-6.19-5.32A6.242 6.242 0 0 1 5.92 12c.5-.1 1-.1 1.5.01V16a2.23 2.23 0 0 0-1.55 1.74c-.21 1.2.6 2.38 1.8 2.58a2.233 2.233 0 0 0 2.65-1.78c.01-.15.01-18.53.01-18.53 3.12 0 3.12 0 3.12 0 .01-1.36-.18-2.73.08-4.01z"/>
        </svg>
      )
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
