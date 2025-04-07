'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function ContactTitle() {
    useEffect(() => {
        gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
        );
    }, []);

    return (
        <div className="contact-title text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-darkbrown mb-6">
            Get In Touch
        </h1>
        <p className="text-lg text-darkbrown/85 max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!
        </p>
        </div>
    );
} 