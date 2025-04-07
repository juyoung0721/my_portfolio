import Link from 'next/link';
import Image from 'next/image';

interface ExperienceCardProps {
    title: string;
    period?: string;
    tags?: string[];
}

export default function ExperienceCard({ title, period, tags }: ExperienceCardProps) {
    const CardContent = () => (
        <div className="relative w-full bg-white rounded-[20px] overflow-hidden custom-shadow p-6 transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col">
                {period && (
                    <span className="text-xs text-gray mb-2">{period}</span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-headergray mb-3">{title}</h3>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 text-xs bg-lightpink/60 text-brown/60 rounded-full"
                            >
                                # {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return <CardContent />;
} 