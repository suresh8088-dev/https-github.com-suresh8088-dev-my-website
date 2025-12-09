import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionReveal from "./ui/SectionReveal";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen w-full py-20 relative flex items-center">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">Featured <span className="text-primary">Projects</span></h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 perspective-1000">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-2xl bg-glass border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:-translate-y-2"
        >
            {/* Image Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-transparent opacity-90"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2 group-hover:text-white transition-colors">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 text-xs font-mono border border-primary/30 text-primary rounded bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.links?.code && (
                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-mono text-sm">
                                <Github size={16} /> Code
                            </a>
                        )}
                        {project.links?.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-mono text-sm">
                                <ExternalLink size={16} /> Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>
    );
};

export default Projects;
