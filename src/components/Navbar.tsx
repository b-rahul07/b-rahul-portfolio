import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(l => l.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-gray-900/10 dark:border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          B RAHUL<span className="text-teal-600 dark:text-teal-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }}
              className={`text-sm font-medium transition-all relative py-1 ${
                activeSection === link.href.substring(1) ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-400" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 hover:border-teal-500/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-teal-400" />
            ) : (
              <Moon className="w-5 h-5 text-teal-600" />
            )}
          </button>
          <Button 
            className="rounded-full bg-teal-500 hover:bg-teal-600 text-white dark:text-black font-bold h-auto py-2 px-6 transition-all duration-300"
            asChild
          >
            <a href="/Rahul_Bandikolla_Resume.pdf" download>
              <Download size={16} className="mr-2" /> Resume
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 hover:border-teal-500/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-teal-400" />
            ) : (
              <Moon className="w-5 h-5 text-teal-600" />
            )}
          </button>
          <button className="text-gray-900 dark:text-white transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-900/10 dark:border-white/10 overflow-hidden transition-colors duration-300"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }}
                  className={`text-2xl font-bold transition-colors ${
                    activeSection === link.href.substring(1) ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="rounded-full bg-teal-500 hover:bg-teal-600 text-white dark:text-black font-bold py-6 text-lg transition-all duration-300"
                asChild
              >
                <a href="/Rahul_Bandikolla_Resume.pdf" download>
                  <Download size={20} className="mr-2" /> Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
