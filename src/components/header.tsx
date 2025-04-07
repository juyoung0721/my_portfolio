'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-pinkgray h-16 py-4 custom-shadow">
            <nav className="max-w-2xl mx-auto px-6 flex justify-center items-center gap-18">
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
            </nav>
        </header>
    );
}
