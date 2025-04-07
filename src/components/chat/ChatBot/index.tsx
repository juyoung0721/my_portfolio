'use client';

import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ChatButton 
                isOpen={isOpen} 
                onClick={() => setIsOpen(!isOpen)} 
            />
            <ChatWindow 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
            />
        </>
    );
} 