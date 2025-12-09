import { motion } from "framer-motion";
import { PERSONAL_DETAILS } from "../constants";
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-[90vh] w-full flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
                {/* Left: Text Content */}
                <div className="text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-accent animate-pulse"></span>
                        <span className="text-accent font-mono text-sm tracking-widest uppercase">System Online</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-white">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary typing-container">
                            {PERSONAL_DETAILS.name}
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 font-mono mb-6">
                        {PERSONAL_DETAILS.role}
                    </h2>

                    <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
                        {PERSONAL_DETAILS.about}
                    </p>

                    <div className="flex gap-4">
                        <a
                            href={PERSONAL_DETAILS.resumeLink}
                            download
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 font-mono rounded-lg flex items-center gap-2 group backdrop-blur-sm relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <Download size={20} />
                            <span className="relative z-10">Download CV</span>
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-white/20 text-white hover:border-secondary hover:text-secondary transition-all duration-300 font-mono rounded-lg">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right: Code Editor Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative"
                >
                    <div className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 overflow-hidden max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Editor Header */}
                        <div className="bg-[#252526] px-4 py-3 flex items-center gap-2 border-b border-black/50">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">Developer.java</div>
                        </div>

                        {/* Editor Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                            <div className="text-gray-400">
                                <span className="text-[#c678dd]">public class</span> <span className="text-[#e5c07b]">Suresh</span> <span className="text-[#abb2bf]">{`{`}</span>
                            </div>
                            <div className="pl-4 text-gray-400">
                                <span className="text-[#c678dd]">public</span> <span className="text-[#e5c07b]">String</span> <span className="text-[#e06c75]">role</span> = <span className="text-[#98c379]">"{PERSONAL_DETAILS.role}"</span>;
                            </div>
                            <div className="pl-4 text-gray-400">
                                <span className="text-[#c678dd]">public</span> <span className="text-[#e5c07b]">String[]</span> <span className="text-[#e06c75]">skills</span> = <span className="text-[#abb2bf]">{`{`}</span>
                            </div>
                            <div className="pl-8 text-[#98c379]">
                                "Java", "Spring Boot", "React", "MySQL"
                            </div>
                            <div className="pl-4 text-[#abb2bf]">{`};`}</div>
                            <div className="br"></div>
                            <div className="pl-4 text-gray-400">
                                <span className="text-[#c678dd]">public</span> <span className="text-[#e5c07b]">void</span> <span className="text-[#61afef]">buildFuture</span>() <span className="text-[#abb2bf]">{`{`}</span>
                            </div>
                            <div className="pl-8 text-gray-400">
                                <span className="text-[#e06c75]">System</span>.<span className="text-[#e06c75]">out</span>.<span className="text-[#61afef]">println</span>(<span className="text-[#98c379]">"Building..."</span>);
                            </div>
                            <div className="pl-4 text-[#abb2bf]">{`}`}</div>
                            <div className="text-[#abb2bf]">{`}`}</div>
                        </div>
                    </div>

                    {/* Decorative Blur Behind */}
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-20 animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
