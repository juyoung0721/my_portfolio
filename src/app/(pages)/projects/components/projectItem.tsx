'use client';

import Image from 'next/image';

export interface ProjectItemProps {
    title: string;
    category: string[];
    description: string;
    imageUrl?: string;
    onClick?: () => void;
}

export default function ProjectItem({ title, category, description, imageUrl, onClick }: ProjectItemProps) {
    // 제목 길이에 따라 line-clamp 결정
    const descriptionClamp = title.length >= 23 ? 'line-clamp-2' : 'line-clamp-4';

    return (
        <div 
            className="w-full max-w-[300px] h-[400px] cursor-pointer"
            onClick={onClick}
        >
            <div className="w-full h-full bg-white rounded-[20px] overflow-hidden custom-shadow transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Image Section - Fixed aspect ratio */}
                <div className="relative w-full h-[170px] flex-shrink-0 bg-gradient-to-b from-orangepink to-white">
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* Content Section - Flexible height with padding */}
                <div className="flex-1 px-6 py-4 flex flex-col relative">
                    <h3 className="text-lg sm:text-xl font-bold text-headergray mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {category.map((cat, index) => (
                            <span 
                                key={index}
                                className="inline-block px-3 py-1 text-xs bg-lightpink/80 text-brown/80 rounded-full"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <p className={`text-sm text-gray ${descriptionClamp}`}>{description}</p>
                    
                    {/* More Details Link - Fixed at bottom */}
                    <div className="absolute bottom-6 right-4 flex items-center text-sm text-gray hover:text-headergray transition-colors">
                        <span>More details</span>
                        <span className="ml-1">→</span>
                    </div>
                </div>
            </div>
        </div>
    );
} 