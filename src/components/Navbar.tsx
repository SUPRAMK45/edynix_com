import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 flex justify-between items-center">
            <Link to="/" className="liquid-glass w-auto pl-3 pr-4 h-12 rounded-full flex items-center justify-center gap-2">
                <img src="https://cdn.phototourl.com/free/2026-04-28-832ea70f-5bc0-4a26-a233-34acfc095854.png" alt="Edynix" className="h-8 w-auto object-contain" />
                <span className="font-heading italic text-xl">Edynix</span>
            </Link>
            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 gap-1">
                {['Home', 'Services', 'Pricing', 'Contact'].map(item => (
                    <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="px-3 py-2 text-sm font-medium text-white/90 font-body">{item}</Link>
                ))}
            </div>
            <div className="w-12 h-12"></div>
        </nav>
    );
};
