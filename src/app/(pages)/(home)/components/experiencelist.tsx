import ExperienceCard from "@/components/experienceCard";
import Link from "next/link";

export default function ExperienceList() {
    const experiences = [
        {
            title: "Mobile Network Lab (MNC) – Intern",
            period: "2023.12 - 2024.12",
            tags: ["5G Network", "Docker Containerization", "Open Source Analysis"]
        },
        {
            title: "KAIROS - Officer",
            period: "2023.12 - ",
            tags: ["LLM", "Generative AI", "AI Agent", "AI Project Development"]
        }
    ];

    return (
        <div className="w-full flex flex-col items-center mt-32">
            <h2 className="text-4xl font-extrabold text-brown mb-10">
                EXPERIENCES
            </h2>
            <div className="w-full max-w-[800px] px-4">
                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((experience, index) => (
                        <div className="experience-card" key={index}>
                            <ExperienceCard
                                title={experience.title}
                                period={experience.period}
                                tags={experience.tags}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-5">
                    <Link 
                        href="/experience" 
                        className="text-darkpink hover:text-brown/80"
                    >
                        <span className="text-lg">More Experiences →</span>
                    </Link>
                </div>
            </div>
        </div>
    );
} 