import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Kala",
    subtitle: "END-TO-END ML SYSTEM",
    description: "Deep learning artist classification system trained on 8,774 images. Achieved 71% Top-1 / 94% Top-5 accuracy using transfer learning with EfficientNetV2-S. CPU-based inference for real-time usability with 113ms latency. Performance reflects a trade-off between class imbalance and real-world generalization; evaluation prioritizes Top-5 accuracy for user-facing reliability.",
    metrics: [
      { label: "TOP-1", value: "71%" },
      { label: "TOP-5", value: "94%" },
      { label: "LATENCY", value: "113ms" }
    ],
    tags: ["TensorFlow", "Keras", "EfficientNetV2-S", "Flask", "React"],
    githubUrl: "https://github.com/b-rahul07/kala-art-ai",
    liveUrl: "https://kala-art-ai.vercel.app/",
    image: "/kala-img.png",
  },
  {
    title: "MediBridge Connect",
    subtitle: "REAL-TIME MEDICAL TRANSLATION",
    description: "Full-stack telemedicine platform with instant two-way AI translation (GPT-4o) and voice transcription (Whisper) bridging language barriers. Engineered latency-sensitive chat using Socket.IO with optimistic UI and cursor-based pagination for 10,000+ message histories. Deployed with hybrid httpOnly cookie + Bearer token authentication across distributed cloud environments (Vercel & Render).",
    metrics: [
      { label: "DELIVERY", value: "50-200ms" },
      { label: "PAGINATION", value: "Cursor-based" },
      { label: "AUTH", value: "Hybrid JWT" }
    ],
    tags: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Socket.IO", "GPT-4o", "Whisper"],
    githubUrl: "https://github.com/b-rahul07/medibridge-connect",
    liveUrl: "https://medibridge-connect.vercel.app",
    image: "/medibrige.png",
  },
  {
    title: "A.C.E.",
    subtitle: "SYSTEM DESIGN & ALGORITHMS",
    description: "Academic management system featuring a custom greedy seating allocation algorithm and automated PDF-to-mind-map generation.",
    metrics: [
      { label: "MODULES", value: "3+" },
      { label: "FEATURES", value: "Algorithmic" },
      { label: "NLP", value: "Heuristic" }
    ],
    tags: ["React", "Express.js", "Supabase", "Algorithms", "PDF Processing"],
    githubUrl: null,
    liveUrl: null,
    image: "/ace-image.png",
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            03
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 max-w-3xl mt-4 transition-colors duration-300">
            Deployable ML systems from concept to production.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image Column */}
              <div className="flex-1 w-full">
                <div className="group relative overflow-hidden rounded-3xl backdrop-blur-md bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 transition-colors duration-300 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 space-y-6">
                {project.title === "Kala" && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                  bg-amber-500/10 border border-amber-500/30 
                                  text-amber-600 dark:text-amber-400
                                  text-sm font-medium mb-4">
                    <span>⭐</span>
                    <span>Featured Project</span>
                  </div>
                )}
                <Badge className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 dark:border-teal-500/20 px-4 py-1 rounded-full text-sm font-semibold tracking-wider transition-colors duration-300">
                  {project.subtitle}
                </Badge>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white transition-colors duration-300 uppercase tracking-tighter font-display">{project.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full backdrop-blur-md bg-gray-900/5 dark:bg-white/5 text-xs font-medium text-teal-600 dark:text-teal-400 border border-teal-500/30 dark:border-teal-500/20 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.metrics.map(metric => (
                    <div key={metric.label} className="backdrop-blur-md bg-gray-900/5 dark:bg-white/5 p-3 md:p-4 rounded-2xl text-center border border-gray-900/10 dark:border-white/10 transition-colors duration-300">
                      <p className="text-lg md:text-2xl font-bold text-teal-600 dark:text-teal-400 transition-colors duration-300">{metric.value}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 transition-colors duration-300">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-4 pt-4">
                    {project.githubUrl && (
                      <Button variant="outline" className="rounded-full gap-2 border-gray-900/20 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-900/5 dark:hover:bg-white/5 transition-colors duration-300 h-auto py-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={18} /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button className="rounded-full gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold h-auto py-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} /> View Project
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
