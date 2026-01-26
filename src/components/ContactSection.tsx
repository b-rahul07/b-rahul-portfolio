import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Check } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgwyaqr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahulbandikolla@gmail.com",
      href: "mailto:rahulbandikolla@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rahul-bandikolla-br07",
      href: "https://www.linkedin.com/in/rahul-bandikolla-br07/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "b-rahul07",
      href: "https://github.com/b-rahul07",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            07
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Contact
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mt-4 transition-colors duration-300">Let's build something together.</p>
        </motion.div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-white/5 
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20
                         transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-white/5 
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20
                         transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg 
                         bg-gray-100 dark:bg-white/5 
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400
                         resize-none
                         focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20
                         transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full px-8 py-3 
                         text-white rounded-full font-medium 
                         transition-all duration-300
                         hover:shadow-lg hover:shadow-teal-500/20
                         flex items-center justify-center gap-2
                         ${isSubmitted
                  ? 'bg-green-500 hover:bg-green-500'
                  : 'bg-teal-500 hover:bg-teal-600'
                }
                         ${(isSubmitting || isSubmitted) ? 'cursor-not-allowed' : ''}`}
            >
              {isSubmitted ? (
                <>
                  <Check size={20} />
                  Message Sent
                </>
              ) : (
                isSubmitting ? 'Sending...' : 'Send Message'
              )}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Or reach out directly:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info) => (
            <motion.a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group backdrop-blur-md bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-teal-500/30 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <info.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-2">
                {info.label}
              </h3>
              <p className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
