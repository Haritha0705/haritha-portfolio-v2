import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ContactProps {
  theme: 'dark' | 'light';
}

export function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'haritha@example.com',
      href: 'mailto:haritha@example.com',
      color: 'from-primary to-tertiary',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 123 4567',
      href: 'tel:+94771234567',
      color: 'from-secondary to-primary',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: null,
      color: 'from-tertiary to-secondary',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-secondary',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-tertiary',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 4000,
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className={`section-padding ${
        theme === 'dark' ? 'bg-surface/30' : 'bg-surface-light/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Get In Touch</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        theme === 'dark'
                          ? 'text-text-secondary'
                          : 'text-text-secondary-light'
                      }`}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4">Follow Me</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-lg ${
                      theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                    } border ${
                      theme === 'dark' ? 'border-border' : 'border-border-light'
                    } flex items-center justify-center ${social.color} transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`mt-8 p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
              } border ${
                theme === 'dark' ? 'border-border' : 'border-border-light'
              }`}
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Open to Opportunities</h4>
                  <p
                    className={`text-sm ${
                      theme === 'dark'
                        ? 'text-text-secondary'
                        : 'text-text-secondary-light'
                    }`}
                  >
                    I'm currently looking for internship and full-time opportunities.
                    If you have an exciting project or role, I'd love to hear from you!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm mb-2 ${
                      theme === 'dark'
                        ? 'text-text-secondary'
                        : 'text-text-secondary-light'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-surface text-text-primary border-border'
                        : 'bg-surface-light text-text-primary-light border-border-light'
                    } border-2 focus:border-primary outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm mb-2 ${
                      theme === 'dark'
                        ? 'text-text-secondary'
                        : 'text-text-secondary-light'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-surface text-text-primary border-border'
                        : 'bg-surface-light text-text-primary-light border-border-light'
                    } border-2 focus:border-primary outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm mb-2 ${
                    theme === 'dark'
                      ? 'text-text-secondary'
                      : 'text-text-secondary-light'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-surface text-text-primary border-border'
                      : 'bg-surface-light text-text-primary-light border-border-light'
                  } border-2 focus:border-primary outline-none transition-colors`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm mb-2 ${
                    theme === 'dark'
                      ? 'text-text-secondary'
                      : 'text-text-secondary-light'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-surface text-text-primary border-border'
                      : 'bg-surface-light text-text-primary-light border-border-light'
                  } border-2 focus:border-primary outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
