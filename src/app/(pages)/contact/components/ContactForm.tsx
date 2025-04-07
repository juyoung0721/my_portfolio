'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 }
        );
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 여기에 실제 폼 제출 로직 추가
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Success animation
        const form = document.querySelector('.contact-form');
        const successMsg = document.createElement('div');
        successMsg.className = 'absolute inset-0 flex items-center justify-center flex-col bg-white rounded-xl';
        successMsg.innerHTML = `
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D8C0B9" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <p class="mt-4 text-lg text-darkgray">Your message has been sent successfully!</p>
        `;

        form?.appendChild(successMsg);

        gsap.fromTo(
        successMsg,
        { opacity: 0 },
        { 
            opacity: 1, 
            duration: 0.5,
            onComplete: () => {
            setTimeout(() => {
                gsap.to(successMsg, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    successMsg.remove();
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setIsSubmitting(false);
                }
                });
            }, 2000);
            }
        }
        );
    };

    return (
        <div className="contact-form flex-1 relative bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label htmlFor="name" className="block text-darkgray font-medium mb-2">
                Your Name
            </label>
            <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F8D7D0] focus:border-transparent transition-all"
                placeholder="Enter your name"
                required
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-darkgray font-medium mb-2">
                Email Address
            </label>
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F8D7D0] focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
            />
            </div>

            <div>
            <label htmlFor="subject" className="block text-darkgray font-medium mb-2">
                Subject
            </label>
            <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F8D7D0] focus:border-transparent transition-all"
                placeholder="What's this about?"
                required
            />
            </div>

            <div>
            <label htmlFor="message" className="block text-darkgray font-medium mb-2">
                Message
            </label>
            <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F8D7D0] focus:border-transparent transition-all min-h-[150px] resize-y"
                placeholder="Tell me about your project..."
                required
            />
            </div>

            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-darkbrown text-white py-4 rounded-lg font-medium hover:bg-darkbrown/80 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
        </div>
    );
} 