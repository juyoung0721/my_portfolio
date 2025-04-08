import { Icons } from "@/lib/icons";
import { ProjectType } from "@/lib/data/projects";

interface ProjectPopupProps {
    project: ProjectType;
    onClose: () => void;
}

const ProjectPopup = ({ project, onClose }: ProjectPopupProps) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleOverlayClick}>
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-4 md:p-8 mx-4 md:mx-0">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute h-8 w-8 top-4 right-4 p-1 text-gray hover:text-headergray transition-colors cursor-pointer"
                >
                    {Icons.x}
                </button>

                {/* Project title */}
                <h2 className="text-2xl font-bold text-darkbrown mb-10 pr-10 md:pr-0">{project.title}</h2>
            
                {/* Project overview */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold">Overview</h3>
                    <hr className="my-3 border-gray-200" />
                    <p className="text-gray-600">{project.overview}</p>
                </section>

                {/* Technologies */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <hr className="my-3 border-gray-200" />
                    <div className="flex flex-wrap gap-2">
                        {project.technology?.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
                {/* Role */}
                {project.role && (
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">My Role</h3>
                        <hr className="my-3 border-gray-200" />
                        <p className="text-gray-600">{project.role}</p>
                    </section>
                )}

                {/* Resources */}
                {(project.files || project.gitLink) && (
                    <section>
                    <h3 className="text-xl font-semibold mb-3">Resources</h3>
                    <hr className="my-3 border-gray-200" />
                    <div>
                        {/* GitHub Repository */}
                        {project.gitLink && (
                            <a
                                href={project.gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-0 text-darkbrown/70 hover:text-darkbrown hover:bg-darkbrown/10 rounded-full p-2 w-fit transition-all duration-200"
                            >
                                <span className="w-5 h-5">{Icons.Git}</span>
                                <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-all duration-200 whitespace-nowrap">
                                    View Repository
                                </span>
                            </a>
                        )}

                        {/* Related Files */}
                        {project.files && project.files.length > 0 && (
                            <div className="mt-4">
                                <ul className="space-y-1">
                                    {project.files.map((file, index) => (
                                        <li key={index}>
                                            <a
                                                href={file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-darkbrown/70 hover:text-darkbrown  hover:bg-darkbrown/10 rounded-full p-2 w-fit "
                                            >
                                                <span className="pr-1">{Icons.Document}</span>
                                                <span>{file.name}</span>
                                    	
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
                )}
            </div>
        </div>
    );
};

export default ProjectPopup; 