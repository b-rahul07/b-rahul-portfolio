import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "Dec 2025",
    credentialId: "7198343",
    verificationUrl: "https://sforce.co/verifycerts",
  },
  {
    title: "Artificial Intelligence Application Developer",
    issuer: "NIELIT Chennai (Govt. of India)",
    date: "Nov 2025",
    credentialId: "1796690",
    verificationUrl: "https://certificate.nielit.gov.in/Verified/check_certificate_info.aspx",
    details: "NCrF Level 4.5, 540 Hours Duration",
  },
  {
    title: "Deep Learning (Elite Certification)",
    issuer: "NPTEL (IIT Ropar)",
    date: "Jul–Oct 2025",
    credentialId: "NPTEL25CS106S458204855",
    verificationUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS106S45820485510407876",
    details: "75% Score (Elite Status)",
  },
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 relative"
        >
          <span className="text-8xl md:text-9xl font-accent opacity-20 text-gray-900/20 dark:text-white/20 absolute -top-12 -left-4 select-none pointer-events-none transition-colors duration-300">
            06
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white relative z-10 transition-colors duration-300 uppercase tracking-tighter">
            Certifications
          </h2>
          <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mt-4 transition-colors duration-300">
            Validated technical expertise and specializations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group backdrop-blur-md bg-gray-900/5 dark:bg-white/5 p-8 rounded-3xl border border-gray-900/10 dark:border-white/10 hover:border-teal-500/30 transition-all duration-300 flex flex-col shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2 transition-colors duration-300">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs font-mono tracking-tight mb-4 transition-colors duration-300">{cert.date} | ID: {cert.credentialId}</p>
                {cert.details && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 italic transition-colors duration-300">{cert.details}</p>
                )}
              </div>

              <Button
                variant="outline"
                className="w-full rounded-full gap-2 border-gray-900/20 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-900/5 dark:hover:bg-white/5 transition-all duration-300 h-auto py-2 mt-auto"
                asChild
              >
                <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                  Verify Credential <ExternalLink size={14} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
