'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icons } from '@/lib/icons';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-pinkgray custom-shadow">
            <div className={`${isMenuOpen ? 'pb-4' : 'h-16'} transition-all duration-150`}>
                <nav className="max-w-2xl mx-auto px-6 pt-4">
                    <div className="flex justify-between items-center">
                        {/* Hamburger Menu Button - Only visible on mobile */}
                        <div className="md:hidden flex justify-center items-end">
                            <button 
                                className="md:hidden text-headergray w-6 h-6" 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {Icons.Menu}
                            </button>
                        </div>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <div className="hidden md:flex justify-center items-center gap-18">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg font-light ${
                                        pathname === item.href
                                            ? 'text-headergray font-semibold'
                                            : 'text-white'
                                    }
                                    hover:font-semibold`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`md:hidden overflow-hidden transition-[max-height] duration-150 ease-out ${
                        isMenuOpen ? 'max-h-64' : 'max-h-0'
                    }`}>
                        <div className={`flex flex-col items-center transition-opacity duration-150 ${
                            isMenuOpen ? 'opacity-100 mt-4' : 'opacity-0'
                        }`}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg font-light py-2 ${
                                        pathname === item.href
                                            ? 'text-headergray font-semibold'
                                            : 'text-white'
                                    }
                                    hover:font-semibold`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}