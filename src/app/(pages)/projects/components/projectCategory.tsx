'use client';

export type ProjectCategoryType = 'ALL' | 'LLM' | 'WEB' | 'AI/DATA' | 'ETC';

interface ProjectCategoryProps {
    selectedCategory: ProjectCategoryType;
    onCategoryChange: (category: ProjectCategoryType) => void;
}

export default function ProjectCategory({ selectedCategory, onCategoryChange }: ProjectCategoryProps) {
    const categories: ProjectCategoryType[] = ['ALL', 'LLM', 'WEB', 'AI/DATA', 'ETC'];

    return (
        <div className="flex justify-center gap-4 mb-28">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`category-button px-6 py-2 cursor-pointer rounded-full text-sm transition-colors duration-200
                        ${selectedCategory === category 
                            ? 'bg-darkbrown text-white' 
                            : 'bg-white/0 border border-darkbrown text-brown hover:bg-darkbrown hover:text-white'}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
} 