'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectItem from './projectItem';
import ProjectPopup from '@/components/projectPopup';
import ProjectCategory, { ProjectCategoryType } from './projectCategory';
import { projects, ProjectType } from '@/lib/data/projects';

gsap.registerPlugin(ScrollTrigger);

const MAIN_CATEGORIES = ['LLM', 'WEB', 'AI/DATA'] as const;

export default function ProjectGrid() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryType>('ALL');
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    useEffect(() => {
        // 초기 상태 설정
        gsap.set('.project-item', {
            opacity: 0,
            y: 50
        });

        // 스크롤 트리거 애니메이션
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [selectedCategory]); // 카테고리가 변경될 때마다 애니메이션 재설정

    const filteredProjects = projects.filter(project => {
        if (selectedCategory === 'ALL') return true;
        if (selectedCategory === 'ETC') {
            return project.category.some(cat => !MAIN_CATEGORIES.includes(cat as any));
        }
        return project.category.includes(selectedCategory);
    });

    const handleProjectClick = (project: ProjectType) => {
        setSelectedProject(project);
    };

    return (
        <div>
            <ProjectCategory 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-item">
                        <ProjectItem
                            {...project}
                            onClick={() => handleProjectClick(project)}
                        />
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedProject && (
                <ProjectPopup 
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
