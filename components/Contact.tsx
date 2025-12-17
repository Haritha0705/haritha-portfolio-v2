"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Stack,
    IconButton, useTheme,
} from "@mui/material";
import { toast } from "sonner";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactInfo = [
    {
        icon: EmailIcon,
        label: "Email",
        value: "haritha@example.com",
        href: "mailto:haritha@example.com",
    },
    {
        icon: PhoneIcon,
        label: "Phone",
        value: "+94 77 123 4567",
        href: "tel:+94771234567",
    },
    {
        icon: LocationOnIcon,
        label: "Location",
        value: "Colombo, Sri Lanka",
        href: null,
    },
];

const socialLinks = [
    { icon: GitHubIcon, label: "GitHub", href: "https://github.com" },
    { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((r) => setTimeout(r, 1500));

        toast.success("Message sent successfully! I'll get back to you soon.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setIsSubmitting(false);
    };

    return (
        <Box
            component="section"
            py={{ xs: 6, md: 10 }}
            bgcolor={isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        mb={1}
                        sx={{
                            background: isDark
                                ? "linear-gradient(90deg,#8b5cf6,#22d3ee)"
                                : "linear-gradient(90deg,#6366f1,#0ea5e9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {"<"}Get In Touch{" />"}
                    </Typography>

                    <Typography
                        align="center"
                        color="text.secondary"
                        fontSize={14}
                        mb={8}
                    >
                        Have a project in mind? Let&#39;s work together!
                    </Typography>
                </motion.div>

                <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={6}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="h6" fontWeight="bold" mb={4}>
                            Let&#39;s Connect
                        </Typography>

                        <Stack spacing={3} mb={4}>
                            {contactInfo.map((info, i) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    background:
                                                        "linear-gradient(135deg,#6366f1,#22d3ee)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Icon sx={{ color: "#fff" }} />
                                            </Box>

                                            <Box>
                                                <Typography fontSize={12} color="text.secondary">
                                                    {info.label}
                                                </Typography>
                                                {info.href ? (
                                                    <Typography
                                                        component="a"
                                                        href={info.href}
                                                        sx={{ textDecoration: "none" }}
                                                    >
                                                        {info.value}
                                                    </Typography>
                                                ) : (
                                                    <Typography>{info.value}</Typography>
                                                )}
                                            </Box>
                                        </Stack>
                                    </motion.div>
                                );
                            })}
                        </Stack>

                        {/* Social */}
                        <Typography fontWeight="bold" mb={2}>
                            Follow Me
                        </Typography>
                        <Stack direction="row" spacing={2} mb={4}>
                            {socialLinks.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <IconButton
                                            component="a"
                                            href={s.href}
                                            target="_blank"
                                            sx={{
                                                border: "1px solid",
                                                borderColor: "divider",
                                            }}
                                        >
                                            <Icon />
                                        </IconButton>
                                    </motion.div>
                                );
                            })}
                        </Stack>

                        {/* Open to work */}
                        <Paper sx={{ p: 3 }}>
                            <Stack direction="row" spacing={2}>
                                <CheckCircleIcon color="success" />
                                <Box>
                                    <Typography fontWeight="bold">
                                        Open to Opportunities
                                    </Typography>
                                    <Typography fontSize={14} color="text.secondary">
                                        I&#39;m currently looking for internship and full-time
                                        opportunities. If you have an exciting role, let’s talk!
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <TextField
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                    />
                                </Stack>

                                <TextField
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />

                                <TextField
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={5}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    startIcon={<SendIcon />}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
