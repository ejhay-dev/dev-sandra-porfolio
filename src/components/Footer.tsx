"use client";

import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Behance", href: "#", icon: "🎨" },
    { name: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-primary/10 py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-3xl font-bold ghibli-gradient-text mb-4"
            >
              Portfolio
            </motion.h3>
            <p className="text-muted-foreground">
              Creative Digital Artist & Designer
            </p>
            <motion.p 
              className="text-sm text-primary/60 mt-2"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Crafting digital experiences with passion ✨
            </motion.p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="text-2xl hover:text-primary transition-all duration-300 p-3 rounded-lg hover:bg-primary/5"
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-sm text-center md:text-right space-y-2"
          >
            <p>© {currentYear} Portfolio. All rights reserved.</p>
            <motion.p 
              className="text-primary/60"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Designed & Developed with 💜
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 0px rgba(139, 92, 246, 0.3)",
                "0 0 10px rgba(139, 92, 246, 0.6)",
                "0 0 0px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs ghibli-gradient-text"
          >
            ✧･ﾟ: *✧･ﾟ:* STUDIO GHIBLI INSPIRED *:･ﾟ✧*:･ﾟ✧
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
}