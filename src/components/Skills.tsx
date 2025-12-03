import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  BarChart3, 
  Code2, 
  Database, 
  PieChart, 
  Brain,
  MessageSquare
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis & Statistics",
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["EDA", "KPI Design", "Forecasting", "A/B Testing", "Statistical Modeling", "Data Cleaning"]
  },
  {
    title: "Programming & ML",
    icon: Code2,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "TensorFlow", "ML Models"]
  },
  {
    title: "Visualization & BI",
    icon: PieChart,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: ["Power BI", "Tableau", "Excel Advanced", "DAX", "Power Query", "Data Storytelling"]
  },
  {
    title: "Databases & Tools",
    icon: Database,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "ETL Pipelines", "APIs", "Docker"]
  },
  {
    title: "AI & Advanced Analytics",
    icon: Brain,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: ["Analytical Thinking", "Communication", "Problem Solving", "Stakeholder Collaboration", "Presentation"]
  }
];

// Floating data science tool icons for animation
const floatingTools = [
  { icon: BarChart3, x: "8%", y: "15%", delay: 0, size: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" },
  { icon: Database, x: "85%", y: "20%", delay: 0.5, size: "w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9" },
  { icon: Brain, x: "12%", y: "75%", delay: 1, size: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" },
  { icon: PieChart, x: "88%", y: "70%", delay: 1.5, size: "w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9" },
  { icon: Code2, x: "50%", y: "10%", delay: 2, size: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" },
  { icon: MessageSquare, x: "25%", y: "85%", delay: 2.5, size: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Floating Data Science Tools Animation - Always visible including mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTools.map((tool, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: tool.x, top: tool.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.15, 0.35, 0.15],
              scale: [0.8, 1, 0.8],
              y: [0, -20, 0],
              x: [0, index % 2 === 0 ? 10 : -10, 0],
              rotate: [0, index % 2 === 0 ? 15 : -15, 0]
            }}
            transition={{ 
              duration: 4 + index * 0.5, 
              repeat: Infinity, 
              delay: tool.delay,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))',
                  'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))',
                  'drop-shadow(0 0 8px hsl(var(--primary) / 0.3))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: tool.delay }}
            >
              <tool.icon className={`${tool.size} text-primary`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl bottom-0 left-0" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-accent/10 rounded-full blur-3xl top-20 right-0" 
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
              What I Know
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold"
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
          </div>

          {/* Skills Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.08, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-glow-primary group relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
                
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: '-200%' }}
                  animate={hoveredCard === index ? { x: '200%' } : { x: '-200%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Icon Header */}
                <motion.div 
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${category.bgColor} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${category.color}`} />
                  <motion.div 
                    className={`absolute inset-0 ${category.bgColor} rounded-lg sm:rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                  />
                </motion.div>

                {/* Category Title */}
                <h3 className="relative text-base sm:text-lg md:text-xl font-heading font-bold mb-3 sm:mb-4 md:mb-5 text-foreground group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="relative flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: 0.4 + index * 0.06 + skillIndex * 0.03,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-md sm:rounded-lg md:rounded-xl text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 cursor-default border border-transparent hover:border-primary/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;