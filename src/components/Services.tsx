"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Creating cinematic experiences through advanced editing techniques, motion graphics, and visual storytelling that captivates audiences worldwide.",
      icon: "🎬",
      thinkingIcon: "💡",
      skills: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Motion Graphics"],
      gradient: "linear-gradient(135deg, rgba(255, 0, 128, 0.8), rgba(255, 107, 53, 0.6))",
      borderGlow: "#ff0080",
      cardClass: "electric-card",
      glowClass: "electric-glow-pink"
    },
    {
      title: "Web Design",
      description: "Crafting cutting-edge digital experiences with innovative interfaces, responsive design, and seamless user interactions.",
      icon: "💻",
      thinkingIcon: "🔍",
      skills: ["UI/UX Design", "React", "Figma", "Responsive Design"],
      gradient: "linear-gradient(135deg, rgba(255, 107, 53, 0.8), rgba(255, 51, 102, 0.6))",
      borderGlow: "#ff6b35",
      cardClass: "electric-card-alt",
      glowClass: "electric-glow-orange"
    },
    {
      title: "Social Media",
      description: "Building powerful brand presence through strategic content creation, viral campaigns, and data-driven social strategies.",
      icon: "📱",
      thinkingIcon: "💡",
      skills: ["Content Strategy", "Brand Design", "Analytics", "Campaign Management"],
      gradient: "linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(139, 92, 246, 0.6))",
      borderGlow: "#00d4ff",
      cardClass: "electric-card-cyan",
      glowClass: "electric-glow-cyan"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Clean background without geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-20 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(255, 107, 53, 0.05))',
          }}
        />

        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.05))',
          }}
        />

        {/* Floating thinking symbols */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-4xl"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(255, 0, 128, 0.4))',
          }}
        >
          💡
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -15, 15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 3,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 text-4xl"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.4))',
          }}
        >
          🔍
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="script-text text-2xl md:text-3xl text-white/60 mb-6"
          >
            ○ What I Do ○
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none electric-text glitch-text"
            data-text="SERVICES"
            style={{
              fontFamily: 'Orbitron, monospace',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          >
            SERVICES
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transforming creative visions into <span className="electric-text font-medium">powerful digital reality</span> through
            innovation, artistry, and cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative"
            >
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: service.gradient,
                  filter: `blur(20px) drop-shadow(0 0 40px ${service.borderGlow})`,
                }}
              />
              
              {/* Thinking symbol accent */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-2xl opacity-60"
                style={{
                  filter: `drop-shadow(0 0 10px ${service.borderGlow})`,
                }}
              >
                {service.thinkingIcon}
              </motion.div>
              
              {/* Main card */}
              <Card className={`relative h-full ${service.cardClass} backdrop-blur-xl border-0 rounded-lg overflow-hidden`}>
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{ background: service.gradient }}
                />
                
                {/* Scan lines */}
                <div className="absolute inset-0 scan-lines opacity-20" />
                
                {/* Content */}
                <CardContent className="relative p-10 h-full flex flex-col">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -10
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl mb-8 text-center electric-pulse relative"
                  >
                    {service.icon}
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute -top-2 -right-2 text-4xl"
                    >
                      {service.thinkingIcon}
                    </motion.div>
                  </motion.div>
                  
                  <h3 
                    className="text-3xl font-bold mb-6 text-center electric-text"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 mb-10 leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    {service.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.15) }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        className="flex items-center justify-center space-x-4 bg-black/30 backdrop-blur-sm py-3 px-6 rounded-lg border"
                        style={{ borderColor: service.borderGlow + '40' }}
                      >
                        <div 
                          className="w-3 h-3 rounded-full shadow-lg"
                          style={{ 
                            background: service.borderGlow,
                          }}
                        />
                        <span 
                          className="font-medium uppercase tracking-wider text-sm"
                          style={{ 
                            fontFamily: 'Orbitron, monospace',
                            color: service.borderGlow
                          }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div 
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(255, 0, 128, 0.3)",
                "0 0 80px rgba(255, 107, 53, 0.4)", 
                "0 0 40px rgba(0, 212, 255, 0.3)",
                "0 0 40px rgba(255, 0, 128, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <div 
              className="px-12 py-6 rounded-lg border-2 text-white text-xl font-bold backdrop-blur-xl electric-button"
              style={{
                borderColor: '#ff0080',
                background: 'rgba(26, 26, 26, 0.8)',
                fontFamily: 'Orbitron, monospace',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              <span className="flex items-center gap-3">
                Ready to Create Magic? <span className="text-2xl">💡</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}