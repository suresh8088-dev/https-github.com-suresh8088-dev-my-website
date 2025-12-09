import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionReveal from "./ui/SectionReveal";
import { PERSONAL_DETAILS, SOCIAL_LINKS } from "../constants";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen w-full py-20 relative flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Initialize <span className="text-primary">Connection</span></h2>
                        <p className="text-gray-400 mb-6">Send a transmission to my frequency.</p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 font-mono text-sm">
                            {SOCIAL_LINKS.map((link, index) => (
                                <div key={index} className="flex items-center gap-2 relative group">
                                    {/* Icon */}
                                    <link.icon size={18} className="text-primary group-hover:text-white transition-colors" />

                                    <span className="text-gray-500 group-hover:text-primary transition-colors cursor-default hidden md:block">
                                        {link.name}:
                                    </span>

                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        {link.name === "Email" ? PERSONAL_DETAILS.email :
                                            link.name === "Phone" ? PERSONAL_DETAILS.phone :
                                                "Connect"}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-glass p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden"
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

                        <form className="space-y-6 relative z-10" action="https://api.web3forms.com/submit" method="POST">
                            {/* Web3Forms Configuration */}
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" value="New Portfolio Contact!" />
                            <input type="hidden" name="from_name" value="Portfolio Contact" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-primary font-mono ml-1">System.User.Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] focus:outline-none transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-primary font-mono ml-1">System.User.Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] focus:outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-primary font-mono ml-1">Transmission.Content</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Enter Message"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:shadow-[0_0_15px_rgba(0,245,255,0.2)] focus:outline-none transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-mono rounded-lg flex items-center justify-center gap-2 group">
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                <span>SEND TRANSMISSION</span>
                            </button>
                        </form>

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Contact;
