'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ContactProps {
    theme: 'dark' | 'light';
}

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'haritha@example.com',
        href: 'mailto:haritha@example.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+94 77 123 4567',
        href: 'tel:+94771234567',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Colombo, Sri Lanka',
        href: null,
    },
];

const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
];

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function Contact({ theme }: ContactProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isDark = theme === 'dark';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Message sent successfully! I'll get back to you soon.", {
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

    const inputClassName = `w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base border-2 outline-none transition-colors ${
        isDark
            ? 'bg-surface text-text-primary border-border focus:border-primary'
            : 'bg-surface-light text-text-primary-light border-border-light focus:border-primary-light'
    }`;

    const labelClassName = `block text-xs sm:text-sm mb-1.5 sm:mb-2 ${
        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
    }`;

    return (
        <section
            id="contact"
            className={`section-padding ${isDark ? 'bg-surface/30' : 'bg-surface-light/30'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        <span className="font-mono text-primary">{'<'}</span>
                        <span className="text-primary">Get In Touch</span>
                        <span className="font-mono text-primary">{' />'}</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
                            Let's Connect
                        </h3>

                        {/* Contact Details */}
                        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 sm:gap-4"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className={`text-xs sm:text-sm ${
                                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                        }`}>
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-sm sm:text-base hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm sm:text-base">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mb-6 sm:mb-8">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                                Follow Me
                            </h4>
                            <div className="flex items-center gap-3 sm:gap-4">
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
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all border ${
                                            isDark
                                                ? 'bg-surface border-border hover:border-primary hover:text-primary'
                                                : 'bg-surface-light border-border-light hover:border-primary-light hover:text-primary-light'
                                        }`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Open to Opportunities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className={`p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border ${
                                isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                                        Open to Opportunities
                                    </h4>
                                    <p className={`text-xs sm:text-sm leading-relaxed ${
                                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                    }`}>
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
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                                <div>
                                    <label htmlFor="name" className={labelClassName}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={inputClassName}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={labelClassName}>
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={inputClassName}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className={labelClassName}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={inputClassName}
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClassName}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className={`${inputClassName} resize-none`}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                                    isDark
                                        ? 'bg-primary text-black hover:bg-primary/90'
                                        : 'bg-primary-light text-white hover:bg-primary-light/90'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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

export default Contact;