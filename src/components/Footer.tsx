import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/b-rahul07',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rahul-bandikolla-br07/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:rahulbandikolla@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="border-t border-gray-900/10 dark:border-white/10 bg-gray-50/50 dark:bg-black/50 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tighter">
              B RAHUL<span className="text-teal-600 dark:text-teal-400">.</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI/ML Engineering Student
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full 
                               bg-gray-900/5 dark:bg-white/5 
                               border border-gray-900/10 dark:border-white/10
                               flex items-center justify-center
                               text-gray-600 dark:text-gray-400
                               hover:text-teal-600 dark:hover:text-teal-400
                               hover:border-teal-500/50
                               transition-all"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900/10 dark:border-white/10 
                        flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
