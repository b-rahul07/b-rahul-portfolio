import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Python Programming Intern",
    company: "VaultofCodes",
    period: "Jul 2025 – Aug 2025",
    description: "Developed engineering utilities including CLI tools and data management scripts. Focused on modular program design, file-based persistence, and code maintainability.",
    achievements: [
      "Built CLI tools with modular architecture",
      "Implemented file-based data persistence",
      "Practiced clean code principles and maintainability"
    ]
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            04
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Experience
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mt-4 transition-colors duration-300">
            Professional industry experience in AI & Engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-900/10 dark:bg-white/10 transition-colors duration-300" />
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />

              <div className="backdrop-blur-md bg-gray-900/5 dark:bg-white/5 p-8 rounded-3xl border border-gray-900/10 dark:border-white/10 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter font-display">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 mt-1 transition-colors duration-300">
                      <Building size={16} />
                      <span className="font-bold uppercase tracking-tight">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm font-mono tracking-tighter transition-colors duration-300 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full border border-gray-900/5 dark:border-white/5">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg transition-colors duration-300">
                  {exp.description}
                </p>

                <div className="grid gap-4">
                  {exp.achievements.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-teal-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
