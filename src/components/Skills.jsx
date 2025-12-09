import { motion } from "framer-motion";
import SectionReveal from "./ui/SectionReveal";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full py-20 relative flex items-center justify-center">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">Technical <span className="text-primary">Skills</span></h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((category, index) => (
              <SkillCategory key={index} category={category} index={index} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,245,255,0.1)] relative overflow-hidden"
    >
      {/* Holographic Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 group-hover:text-primary transition-colors relative z-10">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(0,245,255,0.5)" }}
            className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
