"use client"
import { useState } from 'react';

export interface ExperienceItemProps {
  title: string;
  subtitle: string;
  date: string;
  descriptions: string[];
  tags: string[];
}

export default function ExperienceItem({ title, subtitle, date, descriptions, tags }: ExperienceItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`w-full mb-4 bg-white rounded-xl overflow-hidden custom-shadow transition-shadow duration-200 hover:shadow-lg`}>
      <div 
        className="p-5 cursor-pointer flex justify-between items-center relative hover:bg-pinkgray/20"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex-1">
          <h3 className="text-lg font-medium text-darkgray">{title}</h3>
          <p className="text-sm text-headergray mt-1">{subtitle}</p>
        </div>
        <div className="text-sm text-gray ml-4">{date}</div>
        <div className="relative w-5 h-5 ml-4">
          <div className={`absolute w-2 h-0.5 bg-gray top-1/2 left-1 transition-transform duration-300 ${
            isActive ? '-rotate-45' : 'rotate-45'
          }`}></div>
          <div className={`absolute w-2 h-0.5 bg-gray top-1/2 right-1 transition-transform duration-300 ${
            isActive ? 'rotate-45' : '-rotate-45'
          }`}></div>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-400 bg-pinkgray/20 text-sm ${
        isActive ? 'max-h-[500px] p-5' : 'max-h-0 p-0'
      }`}>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-darkgray/90 leading-relaxed mb-4 last:mb-0">{desc}</p>
        ))}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-600"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 