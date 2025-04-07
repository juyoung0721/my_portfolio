"use client";
import Image from 'next/image';

import { Icons } from '@/lib/icons';

export default function StackIcons() {
    const baseStacks = [
        { name: 'Python', icon: Icons.Python },
        { name: 'Javascript', icon: Icons.Javascript },
        { name: 'Nextjs', icon: Icons.Nextjs },
        { name: 'Docker', icon: Icons.Docker },
        { name: 'Typescript', icon: Icons.Typescript },
        { name: 'Pytorch', icon: Icons.Pytorch },
        { name: 'Java', icon: Icons.Java },
        { name: 'Html', icon: Icons.Html },
        { name: 'Tailwind', icon: Icons.Tailwind }
    ];

    return (
        <div className="w-full flex flex-col items-center mt-20 overflow-hidden">
            <h2 className="text-xl font-bold text-headergray mb-12">
                EXPERIENCE WITH
            </h2>
            <div className="relative w-[700px] overflow-hidden">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 w-[120px] h-full bg-gradient-to-r from-[#FFF0EC] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-[120px] h-full bg-gradient-to-l from-[#FFF0EC] to-transparent z-10"></div>
                
                <div className="flex gap-12 animate-slide will-change-transform">
                    {/* Three sets of items for smoother transition */}
                    {[...baseStacks, ...baseStacks, ...baseStacks].map((stack, index) => (
                        <div 
                            key={index} 
                            className="relative w-[60px] h-[60px] flex-shrink-0"
                        >
                            <div className="w-full h-full text-gray">
                                {stack.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
                @keyframes slide {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(calc(-100% / 3), 0, 0);
                    }
                }
                
                .animate-slide {
                    animation: slide 25s linear infinite;
                    width: fit-content;
                    display: flex;
                    backface-visibility: hidden;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                .animate-slide:hover {
                    animation-play-state: paused;
                }

                /* Style for SVG icons */
                svg {
                    width: 100%;
                    height: 100%;
                    fill: currentColor;
                    transform: translateZ(0);
                }
            `}</style>
        </div>
    );
} 