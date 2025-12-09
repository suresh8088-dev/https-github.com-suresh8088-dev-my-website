import { motion } from "framer-motion";
import { User, Code, Database, Server } from "lucide-react";
import SectionReveal from "./ui/SectionReveal";

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-center py-20 relative">
            <div className="container mx-auto px-6">
                <SectionReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">About <span className="text-primary">Me</span></h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Story */}
                        <div className="space-y-6 text-gray-300 leading-relaxed font-body text-lg">
                            <p>
                                I am <span className="text-white font-bold">Suresh C</span>, a passionate <span className="text-secondary">Java Full Stack Developer</span> dedicated to building scalable and futuristic web applications.
                            </p>
                            <p>
                                Currently interning at <span className="text-accent">Tap Academy</span>, I specialize in the Spring ecosystem and modern frontend technologies. My journey involves crafting robust backends with Java & Spring Boot while delivering immersive user experiences with React & Tailwind.
                            </p>
                            <p>
                                I thrive in solving complex problems, optimizing database queries, and designing clean, efficient code architectures.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <StatCard icon={<Code size={20} />} label="Full Stack" value="Developer" color="text-primary" />
                                <StatCard icon={<Database size={20} />} label="Backend" value="Spring Boot" color="text-secondary" />
                                <StatCard icon={<Server size={20} />} label="Database" value="MySQL" color="text-accent" />
                                <StatCard icon={<User size={20} />} label="Experience" value="Intern" color="text-white" />
                            </div>
                        </div>

                        {/* Hologram Avatar / Stats */}
                        <div className="relative flex justify-center">
                            <div className="relative w-[300px] h-[400px] bg-glass rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50"></div>

                                {/* Hologram Effect */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                <div className="absolute top-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_#00F5FF] animate-scanline"></div>

                                <div className="w-32 h-32 rounded-full border-2 border-primary/50 flex items-center justify-center mb-6 relative">
                                    <User size={64} className="text-primary/80" />
                                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20"></div>
                                </div>

                                <div className="text-center z-10">
                                    <h3 className="text-2xl font-bold text-white mb-1">Suresh C</h3>
                                    <p className="text-primary font-mono text-sm">System.User</p>
                                </div>

                                <div className="mt-8 w-full space-y-4 z-10">
                                    <SkillBar label="Java" level="90%" color="bg-primary" />
                                    <SkillBar label="Spring Boot" level="85%" color="bg-secondary" />
                                    <SkillBar label="React" level="80%" color="bg-accent" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl"></div>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

const StatCard = ({ icon, label, value, color }) => (
    <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors group">
        <div className={`${color} group-hover:scale-110 transition-transform`}>{icon}</div>
        <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
            <p className="font-bold text-white">{value}</p>
        </div>
    </div>
);

const SkillBar = ({ label, level, color }) => (
    <div className="w-full">
        <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">{label}</span>
            <span className="text-primary font-mono">{level}</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: level }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
            ></motion.div>
        </div>
    </div>
);

export default About;
