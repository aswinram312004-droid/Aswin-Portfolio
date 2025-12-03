import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code2, Database, TrendingUp, Brain, BarChart3, PieChart, LineChart, Server, Cpu } from "lucide-react";

// Continuously floating data science icons with smooth, sage-like motion
const floatingDataIcons = [
  { icon: Code2, startX: 8, startY: 15, size: "w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" },
  { icon: Database, startX: 85, startY: 20, size: "w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" },
  { icon: Brain, startX: 12, startY: 65, size: "w-6 h-6 sm:w-9 sm:h-9 md:w-14 md:h-14" },
  { icon: BarChart3, startX: 88, startY: 70, size: "w-5 h-5 sm:w-8 sm:h-8 md:w-11 md:h-11" },
  { icon: TrendingUp, startX: 25, startY: 80, size: "w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" },
  { icon: PieChart, startX: 70, startY: 12, size: "w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" },
  { icon: LineChart, startX: 92, startY: 45, size: "w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9" },
  { icon: Server, startX: 5, startY: 40, size: "w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10" },
  { icon: Cpu, startX: 45, startY: 88, size: "w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9" },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Smooth, always-moving floating data science icons - visible on all screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDataIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ 
              left: `${item.startX}%`, 
              top: `${item.startY}%`,
            }}
            animate={{
              x: [0, 15 * (index % 2 === 0 ? 1 : -1), -10 * (index % 2 === 0 ? 1 : -1), 0],
              y: [0, -20, 10, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8,
            }}
          >
            <motion.div
              animate={{
                opacity: [0.08, 0.15, 0.08],
                scale: [0.9, 1.05, 0.9],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <item.icon className={`${item.size} text-primary`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Multi-layer animated background with parallax */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-primary/20 rounded-full blur-3xl -top-10 -left-10 sm:top-10 sm:-left-20" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-accent/20 rounded-full blur-3xl -bottom-10 -right-10 sm:bottom-10 sm:-right-20" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-secondary/15 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div style={{ scale }} className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 sm:pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Animated Badge with pulsing effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 glass px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 glow-primary relative overflow-hidden group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            </motion.div>
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground relative z-10">Beyond Numbers. Toward Impact.</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>

          {/* Main heading with staggered animation */}
          <div className="mb-3 sm:mb-4 md:mb-6 leading-tight">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="block sm:inline"
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                className="gradient-text inline-block"
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      '0 0 20px hsl(var(--primary) / 0.5)',
                      '0 0 40px hsl(var(--primary) / 0.8)',
                      '0 0 20px hsl(var(--primary) / 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ASWIN RAM K
                </motion.span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Typing animation subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Business Intelligence Analyst",
                2000,
                "Junior Data Scientist",
                2000,
                "ML Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-heading font-semibold gradient-text"
            />
          </motion.div>

          {/* CTA Buttons - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden bg-gradient-primary text-primary-foreground text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 shadow-elevated hover:shadow-glow-primary rounded-xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group glass text-foreground border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 relative overflow-hidden rounded-xl"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary/5 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                  Download Resume
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - Mobile animated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center pt-1.5 sm:pt-2"
                animate={{ 
                  borderColor: ['hsl(var(--primary) / 0.5)', 'hsl(var(--primary))', 'hsl(var(--primary) / 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1 h-1.5 sm:h-2 bg-primary rounded-full"
                  animate={{ 
                    opacity: [1, 0.5, 1], 
                    y: [0, 6, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              <motion.span 
                className="text-[10px] sm:text-xs text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll Down
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;