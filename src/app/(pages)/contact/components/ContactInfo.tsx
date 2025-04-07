'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Icons } from '@/lib/icons';

export default function ContactInfo() {
    useEffect(() => {
        gsap.fromTo(
        '.contact-info',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.6 }
        );

        // Info boxes hover animation
        const infoBoxes = document.querySelectorAll('.info-box');
        infoBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
            y: -5,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
            y: 0,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            duration: 0.3,
            ease: 'power2.out'
            });
        });
        });
    }, []);

    const socialLinks = [
        {
        name: 'Instagram',
        href: 'https://www.instagram.com/jjuying__21',
        icon: Icons.Instagram
        },
        {
        name: 'Git',
        href: 'https://github.com/juyoung0721',
        icon: Icons.Git
        },
        {
        name: 'Tstory',
        href: 'https://devleafy.tistory.com/',
        icon: Icons.Tstory
        }
    ];

    return (
        <div className="contact-info flex-1 space-y-6">
        <div className="info-box bg-white p-6 rounded-xl shadow-lg transition-all">
            <h3 className="flex items-center text-xl text-[#555] font-semibold mb-4">
            <span className="w-6 h-6 mr-3">
                {Icons.ContactPhone}
            </span>
            Phone
            </h3>
            <p>
            <a href="tel:+1234567890" className="text-headergray hover:text-darkgray transition-colors">
                +82) 010-8646-4667
            </a>
            </p>
        </div>

        <div className="info-box bg-white p-6 rounded-xl shadow-lg transition-all">
            <h3 className="flex items-center text-xl text-[#555] font-semibold mb-4">
            <span className="w-6 h-6 mr-3 text-darkgray">
                {Icons.ContactEmail}
            </span>
            Email
            </h3>
            <div className="flex flex-col gap-1">
                <a href="mailto:dendy0721@gmail.com" className="text-headergray hover:text-darkgray transition-colors">
                    → dendy0721@gmail.com
                </a>
                <a href="mailto:korea.ac.kr" className="text-headergray hover:text-darkgray transition-colors">
                    → dendy01@korea.ac.kr
                </a>
            </div>
        </div>

        <div className="info-box bg-white p-6 rounded-xl shadow-lg transition-all">
            <h3 className="flex items-center text-xl text-[#555] font-semibold mb-4">
            <span className="w-6 h-6 mr-3">
                {Icons.Location}
            </span>
            Location
            </h3>
            <p className="text-headergray">Seoul, South Korea</p>

            <h3 className="text-xl text-darkgray font-semibold mt-6 mb-4">
            Social Media
            </h3>
            <div className="flex gap-4">
            {socialLinks.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#f5f5f5] rounded-full flex items-center justify-center hover:bg-darkbrown/80 transition-all group"
                >
                <span className="w-5 h-5 text-darkbrown group-hover:text-white transition-colors">
                    {link.icon}
                </span>
                </Link>
            ))}
            </div>
        </div>
        </div>
    );
} 