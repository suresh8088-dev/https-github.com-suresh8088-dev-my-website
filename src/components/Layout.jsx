import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen font-body text-white selection:bg-primary/30 selection:text-primary relative">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#1a0f3f] via-[#2b1056] to-[#4b1c73] -z-20"></div>

            {/* Plus Pattern Overlay */}
            <div className="fixed inset-0 bg-plus-pattern -z-10 pointer-events-none">
                {/* Manual Plus Signs via CSS Grid or SVG if needed, but utility class handles opacity */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    opacity: 0.03
                }}></div>
            </div>

            <Navbar />

            {/* Main Content - Adjusted for Top Navbar */}
            <main className="relative z-10 pt-20">
                {children}
            </main>
        </div>
    );
};

export default Layout;
