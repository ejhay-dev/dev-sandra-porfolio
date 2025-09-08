"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "hello@portfolio.com",
      icon: "📧",
      link: "mailto:hello@portfolio.com",
      cardClass: "ghibli-card-1",
      borderClass: "ghibli-border"
    },
    {
      title: "LinkedIn",
      value: "/in/yourprofile",
      icon: "💼",
      link: "https://linkedin.com",
      cardClass: "ghibli-card-2",
      borderClass: "ghibli-border-cyan"
    },
    {
      title: "Instagram",
      value: "@yourhandle",
      icon: "📸",
      link: "https://instagram.com",
      cardClass: "ghibli-card-3",
      borderClass: "ghibli-border-pink"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold ghibli-gradient-text mb-6"
          >
            Let's Create Together
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to bring your vision to life? Let's discuss your next project and create something extraordinary
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="ghibli-card-1 ghibli-border backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-3xl font-bold mb-8 ghibli-gradient-text"
                >
                  Send Message
                </motion.h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <Input
                        placeholder="Your Name"
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary rounded-lg"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary rounded-lg"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      placeholder="Project Type"
                      className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary rounded-lg"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary resize-none rounded-lg"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full ghibli-gradient-1 hover:opacity-90 text-white font-medium rounded-lg border-0"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-3xl font-bold mb-6 ghibli-gradient-text"
              >
                Get In Touch
              </motion.h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you need compelling video content, a stunning website, or engaging social media presence, 
                I'm here to help bring your creative vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="block"
                >
                  <Card className={`${info.cardClass} ${info.borderClass} backdrop-blur-sm transition-all duration-300 ghibli-hover`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="text-3xl"
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        >
                          {info.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-foreground">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="text-lg font-bold mb-4 ghibli-gradient-text">Available For</h4>
              <div className="flex flex-wrap gap-3">
                {["Freelance Projects", "Contract Work", "Collaborations", "Consultations"].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 backdrop-blur-sm hover:bg-primary/15 transition-all duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}