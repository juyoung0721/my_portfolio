import Image from 'next/image';

export default function Profile(){
    return (
        <div className="flex flex-col items-center mt-[100px]">
            <div className={`relative w-[200px] h-[200px] rounded-full overflow-hidden bg-white`}>
                <Image
                    src="/images/profile.jpg"
                    alt="Profile Image"
                    fill
                    priority
                    className="object-cover scale-[1]"
                    sizes="(max-width: 768px) 100vw, 280px"
                />
            </div>
            <h1 className="hidden md:block mt-10 text-[40px] font-extrabold text-darkbrown">
                Juyeong Lee | Developer
            </h1>
            <div className="md:hidden flex flex-col justify-center items-center text-darkbrown font-extrabold mt-10 text-[40px]">
                <h1>Juyeong Lee</h1>
    
                <h1>Developer</h1>
            </div>
            <div className="mt-10 px-3 text-center text-base text-gray max-w-[800px] leading-relaxed font-poppins">
                <p>I design and implement cloud-native architectures</p>
                <p>and AI-powered systems to deliver intelligent, user-centric solutions.</p>
                <p>Leveraging tools like Docker, LLMs, and modern web frameworks,</p>
                <p>I strive to create scalable applications that blend functionality with seamless user experience.</p>
            </div>
        </div>
    );
}
