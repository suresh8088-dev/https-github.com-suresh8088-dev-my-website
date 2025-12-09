const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-400 text-sm font-mono">
                    © 2025 <span className="text-primary">Suresh C</span>. All systems operational.
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/suresh8088-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">GitHub</a>
                    <a href="https://linkedin.com/in/suresh-c-b8ba422a0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
