'use client';

import { projects, ProjectType } from "@/lib/data/projects";
import ProjectCard from "@/components/projectCard";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { useState } from "react";
import ProjectPopup from "@/components/projectPopup";
export default function ProjectList() {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    // 특정 두 프로젝트만 필터링
    const featuredProjects = projects.filter(project => 
        ["Personalized Cat AI Service", "Customer Service Agent"].includes(project.title)
    );

    const handleProjectClick = (project: ProjectType) => {
        setSelectedProject(project);
    };

    return (
        <div className="w-full flex flex-col items-center mt-28">
            <h2 className="text-4xl font-extrabold text-brown mb-10">
                PROJECTS
            </h2>
            <div className="w-full max-w-[800px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
                    {featuredProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <ProjectCard
                                title={project.title}
                                imageUrl={project.imageUrl || ""}
                                onClick={() => handleProjectClick(project)}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Link 
                        href="/projects" 
                        className="text-darkpink hover:text-brown/80"
                    >
                        <span className="text-lg">More Projects →</span>
                    </Link>
                </div>
            </div>
            {selectedProject && (
                <ProjectPopup 
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}