'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceSectionProps {
  title: string;
  items: ExperienceItemProps[];
}

export default function ExperienceGrid({ title, items }: ExperienceSectionProps) {
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemElements = itemsRef.current?.querySelectorAll('.experience-item');
    
    if (itemElements) {
      // 초기 상태 설정
      gsap.set(itemElements, {
        opacity: 0,
        y: 30
      });

      // 각 아이템에 스크롤 트리거 애니메이션 적용
      itemElements.forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'power2.out'
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [items]);

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-darkbrown/90">{title}</h2>
        <hr className="h-[1px] text-pinkgray" />
        <div ref={itemsRef} className="flex flex-col gap-4 w-full">
          {items.map((item, index) => (
            <div key={index} className="experience-item w-full">
              <ExperienceItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 