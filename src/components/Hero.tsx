"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 subtle-scan">
        {/* Clean gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))',
          }}
        />

        <motion.div
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.02, 0.06, 0.02]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(6, 182, 212, 0.04))',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-window max-w-2xl mx-auto"
          >
            <div className="window-titlebar">
              <div className="window-controls">
                <div className="window-control close"></div>
                <div className="window-control minimize"></div>
                <div className="window-control maximize"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="code text-xs text-green-400">~/portfolio</span>
              </div>
            </div>
            <div className="p-6">
              <div className="code text-sm text-left space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-green-400 ml-4">Sandra Demition</div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-green-400">$</span>
                  <span className="text-white">cat skills.json</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-gradient">
              SANDRA DEMITION
            </h1>
            
            <div className="flex justify-center">
              <div className="status-indicator status-online">
                <div className="status-dot"></div>
                Available for projects
              </div>
            </div>
          </motion.div>

          {/* Professional Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="dev-grid dev-grid-cols-2 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="dev-card p-4 dev-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="code text-sm text-blue-400">video_editing</span>
              </div>
              <p className="text-xs text-muted text-left">Professional video content creation and post-production</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="dev-card p-4 dev-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="code text-sm text-green-400">social_media</span>
              </div>
              <p className="text-xs text-muted text-left">Strategic social media management and content strategy</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="dev-card p-4 dev-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="code text-sm text-purple-400">web_design</span>
              </div>
              <p className="text-xs text-muted text-left">Modern web design and user experience optimization</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="dev-card p-4 dev-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <span className="code text-sm text-orange-400">visual_scripts</span>
              </div>
              <p className="text-xs text-muted text-left">Creative visual storytelling and script development</p>
            </motion.div>
          </motion.div>

          {/* Professional Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto dev-window p-8"
          >
            <div className="window-titlebar mb-6">
              <div className="window-controls">
                <div className="window-control close"></div>
                <div className="window-control minimize"></div>
                <div className="window-control maximize"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="code text-xs text-muted">About.md</span>
              </div>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="code text-sm">
                <span className="syntax-comment">// Professional Overview</span>
              </div>
              <p className="text-base leading-relaxed text-muted">
                <span className="dev-text-primary font-medium">Creative technologist</span> specializing in 
                digital storytelling, brand development, and user experience design. 
                I combine technical expertise with creative vision to deliver 
                <span className="dev-text-accent font-medium"> exceptional digital experiences</span> that 
                drive engagement and results.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="dev-badge badge-primary">Creative</span>
                <span className="dev-badge badge-success">Technical</span>
                <span className="dev-badge badge-warning">Strategic</span>
                <span className="dev-badge badge-purple">Innovative</span>
              </div>
            </div>
          </motion.div>

          {/* Service Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="dev-grid dev-grid-cols-3 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="dev-card p-6 text-center dev-glow-blue"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <h4 className="font-semibold mb-2">Video Production</h4>
              <p className="text-sm text-muted">Professional video editing and motion graphics</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="dev-card p-6 text-center dev-glow-green"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-green-500/10 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold mb-2">Web Design</h4>
              <p className="text-sm text-muted">Modern websites and digital experiences</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="dev-card p-6 text-center dev-glow-purple"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Social Strategy</h4>
              <p className="text-sm text-muted">Strategic social media management</p>
            </motion.div>
          </motion.div>

          {/* Professional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div className="relative group">
              <div className="absolute -inset-0.5 dev-gradient-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Button
                size="lg"
                className="relative dev-button border-blue-500/30 text-blue-400 px-8 py-3 hover:bg-blue-500/5"
                asChild
              >
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2"
                >
                  <span>View Portfolio</span>
                  <span className="text-sm">→</span>
                </motion.a>
              </Button>
            </motion.div>
            
            <motion.div className="relative group">
              <div className="absolute -inset-0.5 dev-gradient-success rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Button
                size="lg"
                className="relative dev-button border-green-500/30 text-green-400 px-8 py-3 hover:bg-green-500/5"
                asChild
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                  <span className="text-sm">✉</span>
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 6, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13L12 18L17 13M7 6L12 11L17 6"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}