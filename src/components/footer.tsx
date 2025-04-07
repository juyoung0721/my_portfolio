import Link from 'next/link';
import { Icons } from '@/lib/icons';

export default function Footer() {
    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/jjuying__21',
            icon: Icons.Instagram
        },
        {
            name: 'Git',
            href: 'https://github.com/juyoung0721',
            icon: Icons.Git
        },
        {
            name: 'Tstory',
            href: 'https://devleafy.tistory.com/',
            icon: Icons.Tstory
        }
    ];

    return (
        <footer className="w-full bg-pinkgray mt-48 py-12">
            <div className="max-w-[800px] mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h2 className="text-xl font-bold text-white">
                        Contact
                    </h2>
                    <div className="flex flex-col gap-4 text-white font-light text-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6">
                                {Icons.Email}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>dendy0721@gmail.com</span>
                                <span>dendy01@korea.ac.kr</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6">
                                {Icons.Phone}
                            </div>
                            <span>010 - 8646 - 4667</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-headergray/80 transition-colors"
                                aria-label={item.name}
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
} 