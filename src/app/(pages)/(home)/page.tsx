'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "@/components/header";
import Profile from "@/components/ProfileImage";
import StackIcons from "./components/stack_icons";
import ProjectList from "./components/projectlist";
import ExperienceList from "./components/experiencelist";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // 초기 상태 설정
    gsap.set(['.profile-section', '.stack-section', '.project-section', '.experience-section'], {
      opacity: 0,
      y: 30
    });

    gsap.set(['.project-card', '.experience-card'], {
      opacity: 0,
      y: 50
    });

    // 초기 로딩 애니메이션
    const tl = gsap.timeline();
    
    tl.to('.profile-section', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.stack-section', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .to('.project-section', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .to('.experience-section', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5');

    // 스크롤 트리거 애니메이션
    gsap.to('.project-card', {
      scrollTrigger: {
        trigger: '.project-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.to('.experience-card', {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // 클린업 함수
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // 모든 GSAP 애니메이션 kill
      gsap.killTweensOf([
        '.profile-section',
        '.stack-section',
        '.project-section',
        '.experience-section',
        '.project-card',
        '.experience-card'
      ]);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="profile-section">
          <Profile />
        </section>
        <section className="stack-section">
          <StackIcons />
        </section>
        <section className="project-section">
          <ProjectList />
        </section>
        <section className="experience-section">
          <ExperienceList />
        </section>
      </main>
      <Footer />
    </>
  );
}
