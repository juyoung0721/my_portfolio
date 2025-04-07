'use client';

import { Icons } from '@/lib/icons';

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
    return (
        <button
        onClick={onClick}
        className="fixed bottom-6 right-6 w-14 h-14 bg-darkbrown rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        >
        <div className={`w-6 h-6 text-white transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-0'}`}>
            {isOpen ? Icons.Close : Icons.Chat}
        </div>
        </button>
    );
} 