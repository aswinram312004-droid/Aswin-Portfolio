import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Database, TrendingUp, Target, Zap } from "lucide-react";

const stats = [
  { label: "Processed Rows", value: 100, suffix: "K+", icon: Database, color: "text-primary" },
  { label: "Model Accuracy", value: 95, suffix: "%", icon: Target, color: "text-accent" },
  { label: "BI Efficiency", value: 40, suffix: "%", icon: TrendingUp, color: "text-secondary" },
  { label: "Major Projects", value: 5, suffix: "+", icon: Zap, color: "text-primary" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text whitespace-nowrap">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent/10 rounded-full blur-3xl top-0 right-0" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-primary/10 rounded-full blur-3xl bottom-0 left-0" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block text-primary font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3"
            >
              Get To Know More
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
          </div>

          {/* Glass Card with Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.01, 
              y: -3,
              transition: { duration: 0.3 }
            }}
            className="glass p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-elevated hover:shadow-glow-primary group relative overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <motion.p 
              className="relative text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Detail-oriented Data Analyst with strong experience in data cleaning, exploratory analysis, 
              statistical modeling, machine learning, SQL, Power BI, and automated reporting workflows. 
              Hands-on experience handling <motion.span 
                className="text-primary font-semibold inline-block"
                whileHover={{ scale: 1.1 }}
              >100K+ datasets</motion.span>, 
              building ML models with <motion.span 
                className="text-accent font-semibold inline-block"
                whileHover={{ scale: 1.1 }}
              >92–95% accuracy</motion.span>, 
              optimizing SQL pipelines, and designing interactive dashboards that improve business 
              decision-making by <motion.span 
                className="text-secondary font-semibold inline-block"
                whileHover={{ scale: 1.1 }}
              >40%</motion.span>. 
              Skilled in converting raw data into insights and delivering scalable analytics systems.
            </motion.p>

            {/* Animated Stats Grid - Mobile 2x2, Tablet/Desktop 4 columns */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.7 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl bg-muted/30 hover:bg-muted/50 hover:shadow-glow-primary group/stat relative overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" 
                  />
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 hsl(var(--primary) / 0)',
                        '0 0 0 3px hsl(var(--primary) / 0.1)',
                        '0 0 0 0 hsl(var(--primary) / 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-2 sm:mb-3 md:mb-4"
                  >
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto ${stat.color}`} />
                    <motion.div
                      className={`absolute inset-0 ${stat.color} blur-xl opacity-30`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 sm:mt-2 md:mt-3 font-medium group-hover/stat:text-foreground transition-colors duration-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;