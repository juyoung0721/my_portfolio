'use client';

import { useState, useRef, useEffect } from 'react';
import { Icons } from '@/lib/icons';
import { getChatCompletionStream } from '@/lib/utils/openai';


interface ChatWindowProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: string;
    type: 'user' | 'bot';
    content: string;
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            content: '안녕하세요! 포트폴리오에 관해\n궁금한 점을 물어보세요.😊'
        }
    ]);
    const [input, setInput] = useState('');
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const processStreamResponse = async (messageId: string, stream: AsyncGenerator<string, void, unknown>) => {
        let fullContent = '';
        try {
            for await (const chunk of stream) {
                fullContent += chunk;
                setMessages(prev => prev.map(msg => 
                    msg.id === messageId ? { ...msg, content: fullContent } : msg
                ));
            }
        } catch (error) {
            console.error('Streaming error:', error);
            setMessages(prev => prev.map(msg => 
                msg.id === messageId ? { ...msg, content: '죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.' } : msg
            ));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: input
        };

        const botMessageId = (Date.now() + 1).toString();
        const botMessage: Message = {
            id: botMessageId,
            type: 'bot',
            content: ''
        };

        setMessages(prev => [...prev, userMessage, botMessage]);
        setInput('');
        setShowQuickReplies(false);
        setIsLoading(true);
        setStreamingMessageId(botMessageId);

        try {
            const stream = getChatCompletionStream(input);
            await processStreamResponse(botMessageId, stream);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, content: '죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.' } : msg
            ));
        } finally {
            setIsLoading(false);
            setStreamingMessageId(null);
        }
    };

    const handleQuickReply = async (message: string) => {
        if (isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: message
        };

        const botMessageId = (Date.now() + 1).toString();
        const botMessage: Message = {
            id: botMessageId,
            type: 'bot',
            content: ''
        };

        setMessages(prev => [...prev, userMessage, botMessage]);
        setShowQuickReplies(false);
        setIsLoading(true);
        setStreamingMessageId(botMessageId);

        try {
            const stream = getChatCompletionStream(message);
            await processStreamResponse(botMessageId, stream);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, content: '죄송합니다. 응답을 생성하는 중에 오류가 발생했습니다.' } : msg
            ));
        } finally {
            setIsLoading(false);
            setStreamingMessageId(null);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed md:bottom-24 bottom-0 md:right-6 right-0 md:w-[350px] w-full md:h-[500px] h-[80vh] bg-white md:rounded-3xl rounded-t-3xl shadow-xl flex flex-col overflow-hidden z-50">
            {/* Header */}
            <div className="p-4 bg-darkbrown text-white flex justify-between items-center md:rounded-t-3xl rounded-t-3xl">
                <h3 className="font-medium">Chat with me</h3>
                <button 
                    onClick={onClose}
                    className="hover:text-gray-200 transition-colors"
                    aria-label="Close chat"
                >
                    <div className="w-5 h-5 text-white cursor-pointer">
                        {Icons.x}
                    </div>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl p-3 ${
                                message.type === 'user'
                                    ? 'bg-[#F8D7D0] text-[#333333] rounded-br-none'
                                    : 'bg-[#F8EFEF] text-[#333333] rounded-bl-none'
                            } ${message.id === streamingMessageId ? 'animate-pulse' : ''}`}
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {message.content || (message.id === streamingMessageId ? '...' : '')}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && (
                <div className="px-4 py-2 space-y-2">
                    <div className="flex flex-wrap gap-2">
                        <button 
                            onClick={() => handleQuickReply('기술 스택이 궁금해요')}
                            className="px-4 py-2 rounded-full border border-[#F8D7D0] text-sm hover:bg-[#F8D7D0]/10"
                            disabled={isLoading}
                        >
                            기술 스택이 궁금해요
                        </button>
                        <button 
                            onClick={() => handleQuickReply('연락처는 어떻게 되나요?')}
                            className="px-4 py-2 rounded-full border border-[#F8D7D0] text-sm hover:bg-[#F8D7D0]/10"
                            disabled={isLoading}
                        >
                            연락처는 어떻게 되나요?
                        </button>
                    </div>
                </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="메시지 입력..."
                        className="flex-1 px-4 py-2 border border-gray rounded-full text-darkgray focus:outline-none focus:ring-2 focus:ring-chatpink focus:border-transparent"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-chatpink p-2 rounded-full hover:bg-chatpink/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!input.trim() || isLoading}
                    >
                        <div className="w-6 h-6 text-white">
                            {Icons.Send}
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
} 