import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]"
        >
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 border-2 border-primary/30 border-t-primary rounded-full"
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 m-auto w-12 h-12 border-2 border-secondary/30 border-t-secondary rounded-full"
                />

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-primary font-mono text-xs whitespace-nowrap"
                >
                    INITIALIZING...
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
