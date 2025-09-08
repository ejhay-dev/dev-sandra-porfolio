"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Brand Documentary",
    category: "Video Editing",
    description: "A comprehensive brand documentary showcasing cutting-edge product innovation through dynamic visual effects and cinematic storytelling.",
    tech: ["After Effects", "Premiere Pro", "Color Grading", "Motion Graphics"],
    status: "Featured",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Design", 
    description: "Next-generation e-commerce platform with immersive 3D interactions, AI product previews, and seamless user experience design.",
    tech: ["React", "3D Design", "UX/UI", "Responsive"],
    status: "Live",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Viral Campaign",
    category: "Social Media",
    description: "Revolutionary social media campaign that broke engagement records and redefined innovative storytelling techniques.",
    tech: ["Content Strategy", "Analytics", "Creative Direction", "Campaign Management"],
    status: "Trending",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Corporate Identity",
    category: "Visual Design",
    description: "Complete corporate identity redesign with modern branding elements and comprehensive visual guideline development.",
    tech: ["Brand Design", "Logo Design", "Style Guide", "Print Design"],
    status: "Completed",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Tech Startup",
    category: "Video Editing",
    description: "High-impact promotional video for emerging tech startup featuring advanced motion graphics and professional narrative structure.",
    tech: ["Video Production", "Motion Graphics", "Sound Design", "Editing"],
    status: "Recent",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: 6,
    title: "Mobile App UI",
    category: "Web Design",
    description: "Intuitive mobile application interface design with focus on user experience and accessibility standards.",
    tech: ["Mobile Design", "Prototyping", "User Testing", "Accessibility"],
    status: "In Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=entropy&auto=format",
    gradient: "from-cyan-500 to-blue-500"
  }
];

const categories = ["All", "Video Editing", "Web Design", "Social Media", "Visual Design"];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 subtle-scan opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="terminal-window max-w-md mx-auto mb-8"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="window-titlebar">
              <div className="window-controls">
                <div className="window-control close"></div>
                <div className="window-control minimize"></div>
                <div className="window-control maximize"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="code text-xs text-green-400">~/projects</span>
              </div>
            </div>
            <div className="p-4">
              <div className="code text-sm text-left">
                <div className="text-green-400">$ ls -la projects/</div>
                <div className="text-white ml-4 mt-2">6 items found</div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dev-text-primary">
            Featured Work
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing expertise in digital creativity, 
            technical innovation, and strategic thinking across multiple disciplines.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`dev-button px-4 py-2 text-sm ${
                index === 0 
                  ? 'border-blue-500/50 text-blue-400 bg-blue-500/5' 
                  : 'border-gray-600 text-gray-400 hover:border-gray-500'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="dev-grid dev-grid-cols-1 md:dev-grid-cols-2 lg:dev-grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="dev-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] relative"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`dev-badge ${
                      project.status === 'Featured' ? 'badge-primary' :
                      project.status === 'Live' ? 'badge-success' :
                      project.status === 'Trending' ? 'badge-warning' :
                      'badge-purple'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="code text-xs bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:dev-text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted hover:text-white transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </motion.button>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="code text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="dev-button border-blue-500/30 text-blue-400 hover:bg-blue-500/5 flex-1"
                  >
                    <span className="text-xs">View Project</span>
                  </Button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="dev-button border-gray-600 text-gray-400 hover:border-gray-500 px-3 py-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="dev-window max-w-lg mx-auto p-6">
            <h3 className="font-semibold mb-2">Want to see more?</h3>
            <p className="text-sm text-muted mb-4">
              These are just highlights. Check out my complete portfolio with detailed case studies.
            </p>
            <Button className="dev-button border-green-500/30 text-green-400 hover:bg-green-500/5">
              View Complete Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}