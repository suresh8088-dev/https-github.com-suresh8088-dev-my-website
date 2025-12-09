import { motion } from "framer-motion";

const ThreeScene = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                ></motion.div>

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-dotted border-secondary/30 rounded-full"
                ></motion.div>

                {/* Core */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute inset-0 m-auto w-24 h-24 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                </div>
            </div>
        </div>
    );
};

export default ThreeScene;
