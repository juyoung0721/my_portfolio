import Image from 'next/image';
import { Icons } from '@/lib/icons';

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    onClick: () => void;
}

export default function ProjectCard({ title, imageUrl, onClick }: ProjectCardProps) {
    return (
        <div className="block w-full cursor-pointer" onClick={onClick}>
            <div className="relative w-full aspect-[3/2] bg-white rounded-[20px] overflow-hidden custom-shadow transition-all duration-300 hover:scale-[1.02] group">
                {imageUrl && (
                    <div className="w-full h-full relative">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                
                <div className="absolute inset-x-0 bottom-0 w-full p-6 bg-gradient-to-t from-white from-10% via-white/92 via-75% to-transparent">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-gray text-xs mb-1">PROJECT</p>
                            <h3 className="text-lg sm:text-2xl font-bold text-headergray leading-tight">{title}</h3>
                        </div>
                        <div className="text-gray w-7 h-7 ml-4">
                            {Icons.Arrow}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}