import { motion } from "framer-motion";

const SectionReveal = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionReveal;
