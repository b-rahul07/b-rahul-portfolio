import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  label: string;
}

const skillCategories = [
  {
    number: "01",
    title: "ML Foundations",
    skills: [
      { name: "Supervised Learning", level: 4, label: "Advanced" },
      { name: "Feature Engineering", level: 3, label: "Intermediate" },
      { name: "Model Evaluation", level: 3, label: "Intermediate" },
      { name: "Error Analysis", level: 4, label: "Advanced" },
      { name: "Training Optimization", level: 3, label: "Intermediate" },
      { name: "Performance Metrics", level: 3, label: "Intermediate" }
    ]
  },
  {
    number: "02",
    title: "Deep Learning",
    skills: [
      { name: "Neural Networks", level: 4, label: "Advanced" },
      { name: "Transfer Learning", level: 3, label: "Intermediate" },
      { name: "Model Architecture", level: 3, label: "Intermediate" },
      { name: "Overfitting Prevention", level: 3, label: "Intermediate" }
    ]
  },
  {
    number: "03",
    title: "Data & Systems",
    skills: [
      { name: "Python", level: 4, label: "Advanced" },
      { name: "Data Preprocessing", level: 4, label: "Advanced" },
      { name: "Pandas / NumPy", level: 4, label: "Advanced" },
      { name: "SQL", level: 3, label: "Intermediate" },
      { name: "API-based Inference", level: 2, label: "Working Knowledge" },
      { name: "Git", level: 3, label: "Intermediate" }
    ]
  },
  {
    number: "04",
    title: "Deployment",
    skills: [
      { name: "Flask", level: 2, label: "Working Knowledge" },
      { name: "REST APIs", level: 2, label: "Working Knowledge" },
      { name: "Latency Optimization", level: 3, label: "Intermediate" },
      { name: "Model Serving", level: 3, label: "Intermediate" }
    ]
  }
];

function SkillProficiency({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center justify-between mb-4 group/skill">
      <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-teal-600 dark:group-hover/skill:text-teal-400 transition-colors">
        {skill.name}
      </span>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${i <= skill.level ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-700"
                }`}
            ></span>
          ))}
        </div>
        <span className="text-xs text-teal-600 dark:text-teal-400 font-medium w-20 text-right">
          {skill.label}
        </span>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            02
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Skills
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 max-w-3xl mt-4 transition-colors duration-300">
            Practical ML capability organized by expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group backdrop-blur-md bg-gray-50/50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-teal-500/5 dark:text-teal-500/5 select-none transition-colors group-hover:text-teal-500/10">
                {category.number}
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors border-b border-gray-100 dark:border-white/5 pb-4 uppercase tracking-tighter font-display">
                {category.title}
              </h3>

              <div className="space-y-1">
                {category.skills.map((skill) => (
                  <SkillProficiency key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
