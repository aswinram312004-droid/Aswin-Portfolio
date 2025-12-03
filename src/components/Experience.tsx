import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Europe Rental Market Project",
    period: "2024 – 2025",
    location: "Remote",
    highlights: [
      "Analyzed 50K+ property listings to identify market trends",
      "Built forecasting model with 85% accuracy",
      "Automated ETL pipeline processing 5,000+ records daily",
      "Created profitability dashboards reducing analysis time by 60%"
    ],
    color: "primary"
  },
  {
    title: "Data Analyst Trainee",
    company: "VDart Academy",
    period: "2024",
    location: "Chennai, India",
    highlights: [
      "Increased reporting efficiency by 40%",
      "Processed 10K+ customer data records",
      "Optimized SQL refresh time from 4 hours to 45 minutes",
      "Designed interactive Power BI dashboards"
    ],
    color: "accent"
  },
  {
    title: "Machine Learning Intern",
    company: "NIT Trichy",
    period: "2023",
    location: "Trichy, India",
    highlights: [
      "Developed Face Recognition System with 95% accuracy",
      "Implemented CNN models using TensorFlow",
      "Saved 20+ manual hours weekly through automation",
      "Collaborated with research team on AI projects"
    ],
    color: "secondary"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-secondary/10 rounded-full blur-3xl top-1/2 right-0 -translate-y-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-primary/10 rounded-full blur-3xl top-0 left-0" 
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
          <div className="text-center mb-10 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block text-primary font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 sm:mb-3"
            >
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline - Mobile First Design */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line - always on left for mobile, centered for desktop */}
            <motion.div 
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute left-[7px] sm:left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary origin-top" 
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative mb-6 sm:mb-8 md:mb-12 last:mb-0"
              >
                {/* Timeline dot with glow - Mobile positioned */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-0 sm:left-1 md:left-1/2 top-6 sm:top-8 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary md:-translate-x-1/2 z-10"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content card - Full width mobile, alternating desktop */}
                <div className={`ml-6 sm:ml-8 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:mr-[52%] md:pr-4' 
                    : 'md:ml-[52%] md:pl-4'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="glass p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-elevated hover:shadow-glow-primary group relative overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                    
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3 sm:mb-4 relative">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 sm:p-2.5 bg-${exp.color}/10 rounded-lg flex-shrink-0`}
                      >
                        <Briefcase className={`w-4 h-4 sm:w-5 sm:h-5 text-${exp.color}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-bold text-foreground mb-0.5 sm:mb-1 leading-tight">
                          {exp.title}
                        </h3>
                        <p className={`text-sm sm:text-base text-${exp.color} font-semibold mb-1 sm:mb-2`}>{exp.company}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground relative">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.7 + index * 0.2 + hIndex * 0.1 }}
                          className="flex items-start gap-2 text-xs sm:text-sm md:text-base"
                        >
                          <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 text-${exp.color} mt-0.5 flex-shrink-0`} />
                          <span className="hover:text-foreground transition-colors duration-300 leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;