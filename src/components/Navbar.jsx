import { Home, User, Briefcase, Code, Mail, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL_DETAILS } from "../constants";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#050510]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Cpu className="text-primary" size={24} />
                    </div>
                    <span className="font-bold font-heading text-xl tracking-wider text-white group-hover:text-primary transition-colors">
                        {PERSONAL_DETAILS.name.split(" ")[0]}
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#home" label="Home" isActive={activeSection === "home"} />
                    <NavLink href="#projects" label="Projects" isActive={activeSection === "projects"} />
                    <NavLink href="#experience" label="Experience" isActive={activeSection === "experience"} />
                    <NavLink href="#skills" label="Skills" isActive={activeSection === "skills"} />
                    <NavLink href="#contact" label="Contact" isActive={activeSection === "contact"} />
                </div>

                {/* Mobile Menu Button - simplified */}
                <div className="md:hidden text-white">
                    <span className="text-sm font-mono text-primary">MENU</span>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label, isActive }) => (
    <a
        href={href}
        className={`relative group text-sm font-mono uppercase tracking-widest transition-colors ${isActive ? "text-primary" : "text-gray-400 hover:text-white"
            }`}
    >
        {label}
        <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
    </a>
);

export default Navbar;
