import { motion } from 'framer-motion';

export default function StatsBar() {
  const stats = [
    { label: 'Projects', value: '3+' },
    { label: 'Skills', value: '15+' },
    { label: 'CGPA', value: '9.21' },
    { label: 'Hours Trained', value: '540+' }
  ];

  return (
    <section className="py-12 border-y border-gray-900/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-mono font-black text-teal-600 dark:text-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
