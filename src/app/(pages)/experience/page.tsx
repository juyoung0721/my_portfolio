'use client';

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "@/components/header";
import ExperienceGrid from "./components/ExperienceGrid";
import Footer from "@/components/footer";
import { InternExperience, GroupExperience, EducationExperience } from "@/lib/data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    useEffect(() => {
        // 초기 상태 설정
        gsap.set('.experience-title', {
            opacity: 0,
            y: 50
        });

        gsap.set('.experience-section', {
            opacity: 0,
            y: 30
        });

        // 타이틀 애니메이션
        gsap.to('.experience-title', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        });

        // 섹션 애니메이션
        gsap.to('.experience-section', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.3
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto flex flex-col items-center px-4 mt-24 gap-16">
                <h1 className="experience-title text-4xl font-extrabold text-darkbrown mb-10">
                    My Experience
                </h1>
                <div className="experience-section">
                    <ExperienceGrid title="Intern" items={InternExperience} />
                </div>
                <div className="experience-section">
                    <ExperienceGrid title="Group" items={GroupExperience} />
                </div>
                <div className="experience-section">
                    <ExperienceGrid title="Education" items={EducationExperience} />
                </div>
            </main>
            <Footer />
        </>
    );
}
