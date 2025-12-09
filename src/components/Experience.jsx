import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";
import SectionReveal from "./ui/SectionReveal";
import { EXPERIENCE } from "../constants";

const Experience = () => {
    const containerRef = useRef(null);

    return (
        <section id="experience" className="min-h-screen w-full flex items-center justify-center py-20 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">My <span className="text-primary">Experience</span></h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>

                    <div ref={containerRef} className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2">
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-secondary to-transparent shadow-[0_0_10px_#00F5FF] opacity-50"
                            ></div>
                        </div>

                        <div className="space-y-12">
                            {EXPERIENCE.map((exp, index) => (
                                <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#00F5FF] transform md:-translate-x-1/2 z-10 mt-1.5 border border-white"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50"></div>
                                    </motion.div>

                                    {/* Content Side */}
                                    <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="bg-glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,245,255,0.1)] relative overflow-hidden"
                                        >
                                            {/* Hover Beam */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

                                            <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                <Briefcase size={16} />
                                                <span className="font-mono text-sm">{exp.company}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                            <div className={`flex items-center gap-2 text-gray-400 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                {exp.description}
                                            </p>
                                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                {exp.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-accent border border-white/5 group-hover:border-accent/20 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Empty Side */}
                                    <div className="md:w-1/2 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Experience;
