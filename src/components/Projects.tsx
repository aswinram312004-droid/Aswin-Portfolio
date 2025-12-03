import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Home, BarChart3, Film, ShoppingCart, Users } from "lucide-react";

const projects = [
  {
    title: "House Price Prediction",
    description: "ML model predicting house prices with 92% accuracy using regression algorithms and feature engineering",
    stats: "15,000 records analyzed",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    gradient: "from-primary to-accent",
    icon: Home
  },
  {
    title: "College Performance Dashboard",
    description: "Predictive BI dashboard analyzing student performance and retention metrics with actionable insights",
    stats: "10K+ student records",
    tech: ["Power BI", "DAX", "SQL", "Predictive Analytics"],
    gradient: "from-accent to-secondary",
    icon: BarChart3
  },
  {
    title: "Netflix EDA Analysis",
    description: "Comprehensive exploratory analysis of Netflix content trends, patterns, and viewer preferences",
    stats: "8,000+ titles analyzed",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    gradient: "from-secondary to-primary",
    icon: Film
  },
  {
    title: "E-commerce Sales BI Dashboard",
    description: "Interactive dashboard tracking sales KPIs, customer behavior insights, and revenue trends",
    stats: "50K+ sales records",
    tech: ["Power BI", "Excel", "Power Query", "DAX"],
    gradient: "from-primary to-accent",
    icon: ShoppingCart
  },
  {
    title: "HR Attrition ML Model",
    description: "Predictive model identifying employee attrition risks with retention strategies and recommendations",
    stats: "95% accuracy achieved",
    tech: ["Python", "ML", "Classification", "Power BI"],
    gradient: "from-accent to-secondary",
    icon: Users
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent/10 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-primary/10 rounded-full blur-3xl bottom-20 right-0" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block text-primary font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3"
            >
              Portfolio Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Projects Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.08, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
                />
                
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: '-200%' }}
                  animate={hoveredIndex === index ? { x: '200%' } : { x: '-200%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 flex-shrink-0`}
                    >
                      <project.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3 
                        className="text-base sm:text-lg md:text-xl font-heading font-bold text-foreground group-hover:gradient-text transition-all duration-300 leading-tight"
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats badge */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary text-[10px] sm:text-xs md:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-primary/20"
                  >
                    {project.stats}
                  </motion.div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.08 + techIndex * 0.04 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground text-[9px] sm:text-xs rounded-md transition-all duration-300 border border-transparent hover:border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary hover:text-accent transition-colors duration-300 font-medium"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary hover:text-accent transition-colors duration-300 font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;