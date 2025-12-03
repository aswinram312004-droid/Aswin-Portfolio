import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Globe } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/aswinramk", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aswin-ram-808286303", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aswinram312004@gmail.com", label: "Email" },
  { icon: Globe, href: "https://aswinramk.com", label: "Website" }
];

const Footer = () => {
  return (
    <footer className="relative py-8 sm:py-12 border-t border-border/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl bottom-0 left-1/4" 
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          className="absolute w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl bottom-0 right-1/4" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-heading font-bold gradient-text"
          >
            ARK
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 sm:gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl hover:shadow-glow-primary group transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center px-4"
          >
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              © 2025 <span className="text-primary font-semibold">Aswin Ram K</span>
              <span className="flex items-center gap-1">
                • Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;