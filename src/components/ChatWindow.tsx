import React, { useState, useRef, useEffect } from "react";
import { getChatCompletionStream } from "@/lib/utils/openai";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatWindow() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasFirstChunk, setHasFirstChunk] = useState(false);
    const [displayedMessage, setDisplayedMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // 먼저 모든 상태 초기화
        setIsLoading(true);
        setHasFirstChunk(false);
        setDisplayedMessage("");

        const userMessage: Message = {
            role: "user",
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");

        try {
            const stream = await getChatCompletionStream(input);
            let assistantMessage = "";

            for await (const chunk of stream) {
                if (!hasFirstChunk) {
                    setHasFirstChunk(true);
                }
                
                assistantMessage += chunk;
                setDisplayedMessage(assistantMessage);
            }

            setMessages(prev => [...prev, {
                role: "assistant",
                content: assistantMessage
            }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "죄송합니다. 오류가 발생했습니다. 다시 시도해주세요."
            }]);
        } finally {
            setIsLoading(false);
            setHasFirstChunk(false);
            setDisplayedMessage("");
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                                message.role === "user"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            } whitespace-pre-wrap break-words break-all overflow-hidden`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-lg p-3 bg-gray-200 text-gray-800 whitespace-pre-wrap break-words break-all overflow-hidden">
                            {hasFirstChunk ? displayedMessage : "🔍 관련 프로젝트를 찾고 있습니다..."}
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="메시지를 입력하세요..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    >
                        전송
                    </button>
                </div>
            </form>
        </div>
    );
} 