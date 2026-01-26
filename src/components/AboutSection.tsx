import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, LineChart, Code2, GitBranch, Gauge } from "lucide-react";

const capabilities = [
  {
    title: "Machine Learning",
    description: "Model architecture selection, hyperparameter tuning, and training optimization for classification and regression tasks.",
    icon: Brain
  },
  {
    title: "Statistical Analysis",
    description: "Performance evaluation using precision, recall, F1-score, and cross-validation to ensure model reliability.",
    icon: LineChart
  },
  {
    title: "Data Engineering",
    description: "Dataset preparation, cleaning, augmentation pipelines, and feature extraction for model training.",
    icon: Database
  },
  {
    title: "Model Evaluation",
    description: "Rigorous testing strategies including train-validation-test splits, confusion matrices, and error analysis.",
    icon: GitBranch
  },
  {
    title: "Optimization",
    description: "Model compression, quantization, and efficiency improvements for inference performance.",
    icon: Gauge
  },
  {
    title: "Deployment",
    description: "Packaging trained models into REST APIs and simple web interfaces for practical validation and use.",
    icon: Code2
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            01
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
        </motion.div>

        {/* Two-Column Layout: Text (Left) + Photo (Right) */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Text Column (65%) */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-2xl md:text-3xl text-teal-600 dark:text-teal-400 transition-colors duration-300 font-bold">
              Machine Learning Engineer · Applied Data Science
            </p>

            <div className="space-y-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 text-justify">
              <p>
                I work on applied machine learning problems with a focus on understanding why <span className="font-semibold text-gray-800 dark:text-gray-200">models behave the way they do</span>. My approach emphasizes <span className="font-semibold text-gray-800 dark:text-gray-200">rigorous experimentation</span>, thoughtful evaluation, and clear reasoning around <span className="font-semibold text-gray-800 dark:text-gray-200">performance trade-offs</span>.
              </p>

              <p>
                I am particularly interested in modeling decisions under <span className="font-semibold text-gray-800 dark:text-gray-200">real-world constraints</span>—<span className="font-semibold text-gray-800 dark:text-gray-200">class imbalance</span>, <span className="font-semibold text-gray-800 dark:text-gray-200">noisy data</span>, and <span className="font-semibold text-gray-800 dark:text-gray-200">metric choice</span>—and I value <span className="font-semibold text-gray-800 dark:text-gray-200">honest performance interpretation</span> over optimistic claims.
              </p>

              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">Deployment</span>, when required, serves as a way to validate modeling choices in practice rather than as an end goal.
              </p>
            </div>
          </div>

          {/* Photo Column (35%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 relative group"
          >
            <div className="absolute -inset-2 bg-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 aspect-square shadow-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/profile.jpg"
                alt="Rahul Bandikolla"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Capabilities - Full Width Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
            Core Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl backdrop-blur-md bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-all duration-300">
                  <cap.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors uppercase tracking-tight font-display">
                  {cap.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
