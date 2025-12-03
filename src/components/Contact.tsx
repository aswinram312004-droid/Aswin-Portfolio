import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Globe, Send, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 93613 02122", href: "tel:+919361302122" },
  { icon: Mail, label: "Email", value: "aswinram312004@gmail.com", href: "mailto:aswinram312004@gmail.com" },
  { icon: Globe, label: "Website", value: "aswinramk.com", href: "https://aswinramk.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aswin-ram", href: "https://linkedin.com/in/aswin-ram-808286303" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "#" }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) throw error;
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl bottom-0 right-0" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-accent/10 rounded-full blur-3xl top-20 left-0" 
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
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold"
            >
              Contact <span className="gradient-text">Me</span>
            </motion.h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group h-full">
                {/* Animated background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 relative">Let's Connect</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 md:mb-8 relative leading-relaxed">
                  I'm always open to discussing new projects, opportunities, or partnerships. 
                  Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-2 sm:space-y-3 md:space-y-4 relative">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.01 }}
                      className="flex items-center gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 bg-muted/30 hover:bg-muted/50 rounded-lg sm:rounded-xl transition-all duration-300 group/item border border-transparent hover:border-primary/20"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors duration-300 flex-shrink-0"
                      >
                        <info.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] sm:text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground truncate">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-5 md:space-y-6 relative overflow-hidden group h-full">
                {/* Animated background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass border-primary/20 focus:border-primary bg-muted/30 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass border-primary/20 focus:border-primary bg-muted/30 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 }}
                  className="relative"
                >
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Subject (Optional)
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="glass border-primary/20 focus:border-primary bg-muted/30 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass border-primary/20 focus:border-primary resize-none bg-muted/30 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300 group/btn h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    size="lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;