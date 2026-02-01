import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{
        background: "var(--bg-hero)",
        backgroundImage: `
          radial-gradient(circle at 2px 2px, var(--grid-color) 1px, transparent 0),
          var(--bg-hero)
        `,
        backgroundSize: "40px 40px, 100% 100%"
      }}
    >
      <ParticleBackground />
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm mb-8 mt-24 md:mt-0 transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-display font-black text-gray-900 dark:text-white mb-6 tracking-tighter transition-colors duration-300 uppercase"
          >
            RAHUL BANDIKOLLA
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mb-4 font-mono font-medium tracking-tight 
                           typing-animation overflow-hidden whitespace-normal md:whitespace-nowrap border-r-2 border-current">
              Machine Learning Engineer · Applied Data Science
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300"
          >
            Building applied ML systems with emphasis on data curation, evaluation rigor, and real-world performance constraints—from modeling to production validation.
          </motion.p>

          {/* Stat Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-golden-md mb-golden-lg w-full max-w-2xl"
          >
            {[
              { label: "CGPA", value: "9.14" },
              { label: "ML Focus", value: "Applied" },
              { label: "Grad", value: "2027" }
            ].map((stat, i) => (
              <div
                key={i}
                className="backdrop-blur-sm bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 rounded-xl px-6 py-4 text-center hover:border-teal-500/30 transition-all duration-300"
              >
                <p className="text-gray-900 dark:text-white text-xl font-mono font-black transition-colors duration-300">{stat.value}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs uppercase tracking-widest mt-1 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 h-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 border border-gray-900/20 dark:border-white/20 hover:border-teal-500 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-900/5 dark:hover:bg-white/5 h-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/b-rahul07", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-bandikolla-br07/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rahulbandikolla@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-600 dark:text-teal-400 animate-bounce-slow cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
