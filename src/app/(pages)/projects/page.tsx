'use client';

import Header from "@/components/header";
import ProjectGrid from "./components/projectGrid";
import ProjectCategory from "./components/projectCategory";
import Footer from "@/components/footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    useEffect(() => {
        // 초기 상태 설정
        gsap.set('.project-title', {
            opacity: 0,
            y: 50
        });

        gsap.set('.category-button', {
            opacity: 0,
            y: 30
        });

        // 타이틀과 카테고리 애니메이션
        const tl = gsap.timeline();
        
        tl.to('.project-title', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        })
        .to('.category-button', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.4');

    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto flex flex-col items-center px-4 mt-24">
                <h1 className="project-title text-4xl font-extrabold text-darkbrown mb-10">
                    My Projects
                </h1>
                <ProjectGrid />
            </main>
            <Footer />
        </>
    );
}
