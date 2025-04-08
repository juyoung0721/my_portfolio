'use client';

export type ProjectCategoryType = 'ALL' | 'LLM' | 'WEB' | 'AI/DATA' | 'ETC';

interface ProjectCategoryProps {
    selectedCategory: ProjectCategoryType;
    onCategoryChange: (category: ProjectCategoryType) => void;
}

export default function ProjectCategory({ selectedCategory, onCategoryChange }: ProjectCategoryProps) {
    const firstRowCategories: ProjectCategoryType[] = ['ALL', 'LLM', 'WEB'];
    const secondRowCategories: ProjectCategoryType[] = ['AI/DATA', 'ETC'];
    const allCategories: ProjectCategoryType[] = [...firstRowCategories, ...secondRowCategories];

    return (
        <div className="mb-10 md:mb-28 px-4">
            {/* Desktop Layout - Single Row */}
            <div className="hidden md:flex justify-center gap-4">
                {allCategories.map((category) => (
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

            {/* Mobile Layout - Two Rows */}
            <div className="md:hidden flex flex-col items-center gap-2">
                {/* First Row */}
                <div className="flex justify-center gap-4">
                    {firstRowCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`category-button px-4 py-2 cursor-pointer rounded-full min-w-[80px] text-sm transition-colors duration-200
                                ${selectedCategory === category 
                                    ? 'bg-darkbrown text-white' 
                                    : 'bg-white/0 border border-darkbrown text-brown hover:bg-darkbrown hover:text-white'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex justify-center gap-4">
                    {secondRowCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`category-button px-4 py-2 cursor-pointer rounded-full min-w-[80px] text-sm transition-colors duration-200
                                ${selectedCategory === category 
                                    ? 'bg-darkbrown text-white' 
                                    : 'bg-white/0 border border-darkbrown text-brown hover:bg-darkbrown hover:text-white'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 