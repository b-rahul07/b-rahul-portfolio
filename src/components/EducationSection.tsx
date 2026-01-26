import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    "Machine Learning", "Deep Learning", "Data Structures", 
    "Algorithms", "Database Management", "Computer Networks"
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            05
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Education
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mt-4 transition-colors duration-300">
            Academic foundations and specialized training.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-gray-900/5 dark:bg-white/5 p-10 rounded-3xl border border-gray-900/10 dark:border-white/10 max-w-5xl overflow-hidden relative transition-colors duration-300 shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 transition-opacity duration-300">
            <GraduationCap size={160} className="text-teal-600 dark:text-teal-400" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter font-display">B.Tech in CS & Engineering (AI & ML)</h3>
                <p className="text-xl text-teal-600 dark:text-teal-400 font-bold transition-colors duration-300 uppercase tracking-tight">Vardhaman College of Engineering</p>
                <p className="text-gray-500 dark:text-gray-500 font-mono tracking-tighter mt-2 transition-colors duration-300 bg-gray-100 dark:bg-white/5 px-4 py-1 rounded-full border border-gray-900/5 dark:border-white/5 inline-block">2023 - 2027</p>
              </div>

              <div className="inline-flex items-center gap-4 bg-teal-500/10 border border-teal-500/20 p-6 rounded-2xl transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">9.21<span className="text-teal-500/50 text-xl">/10.0</span></p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mt-1 transition-colors duration-300">Current CGPA</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-lg mb-4 transition-colors duration-300">
                <BookOpen size={20} className="text-teal-600 dark:text-teal-400" />
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-3">
                {courses.map(course => (
                  <Badge key={course} className="bg-gray-900/5 dark:bg-white/5 hover:bg-teal-500/10 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 border border-gray-900/10 dark:border-white/10 px-4 py-2 rounded-full transition-all h-auto">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
