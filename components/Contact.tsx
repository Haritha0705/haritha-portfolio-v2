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
    IconButton,
    useTheme,
} from "@mui/material";
import { toast } from "sonner";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { contactInfo, socialLinksContact, FormData } from "@/data/content";

const MotionBox = motion.create(Box);

export default function Contact() {
    const theme = useTheme();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            id="contact"
            py={theme.custom.sectionPadding}
            bgcolor={theme.palette.background.default}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        mb={1}
                        sx={{
                            background: theme.custom.gradients.text,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {"<"}Get In Touch{" />"}
                    </Typography>

                    <Typography align="center" color="text.secondary" fontSize={14} mb={8}>
                        Have a project in mind? Let&#39;s work together!
                    </Typography>
                </MotionBox>

                <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={6}>
                    {/* Left */}
                    <MotionBox initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <Typography variant="h6" fontWeight="bold" mb={4}>
                            Let&#39;s Connect
                        </Typography>

                        <Stack spacing={3} mb={4}>
                            {contactInfo.map((info, i) => {
                                const Icon = info.icon;
                                return (
                                    <MotionBox key={info.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    background: theme.custom.gradients.text,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Icon sx={{ color: "#fff" }} />
                                            </Box>
                                            <Box>
                                                <Typography fontSize={12} color="text.secondary">{info.label}</Typography>
                                                {info.href ? (
                                                    <Typography component="a" href={info.href} sx={{ textDecoration: "none", color: theme.palette.primary.main }}>
                                                        {info.value}
                                                    </Typography>
                                                ) : (
                                                    <Typography color="text.primary">{info.value}</Typography>
                                                )}
                                            </Box>
                                        </Stack>
                                    </MotionBox>
                                );
                            })}
                        </Stack>

                        {/* Social */}
                        <Typography fontWeight="bold" mb={2}>Follow Me</Typography>
                        <Stack direction="row" spacing={2} mb={4}>
                            {socialLinksContact.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <MotionBox key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                        <IconButton
                                            component="a"
                                            href={s.href}
                                            target="_blank"
                                            sx={{
                                                border: "1px solid",
                                                borderColor: theme.palette.divider,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            <Icon />
                                        </IconButton>
                                    </MotionBox>
                                );
                            })}
                        </Stack>

                        {/* Open to work */}
                        <Paper sx={{ p: 3, bgcolor: theme.custom.glass.background, backdropFilter: theme.custom.glass.blur, border: theme.custom.glass.border }}>
                            <Stack direction="row" spacing={2}>
                                <CheckCircleIcon color="success" />
                                <Box>
                                    <Typography fontWeight="bold">Open to Opportunities</Typography>
                                    <Typography fontSize={14} color="text.secondary">
                                        I&#39;m currently looking for internship and full-time opportunities. If you have an exciting role, let&#39;s talk!
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </MotionBox>

                    {/* Right - Form */}
                    <MotionBox initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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
                                        sx={{
                                            bgcolor: theme.palette.background.paper,
                                            borderRadius: 1,
                                            '& .MuiOutlinedInput-root': {
                                                color: theme.palette.text.primary,
                                                '& fieldset': { borderColor: theme.palette.divider },
                                                '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                            },
                                        }}
                                    />
                                    <TextField
                                        label="Your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        fullWidth
                                        sx={{
                                            bgcolor: theme.palette.background.paper,
                                            borderRadius: 1,
                                            '& .MuiOutlinedInput-root': {
                                                color: theme.palette.text.primary,
                                                '& fieldset': { borderColor: theme.palette.divider },
                                                '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                            },
                                        }}
                                    />
                                </Stack>

                                <TextField
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        bgcolor: theme.palette.background.paper,
                                        '& .MuiOutlinedInput-root': {
                                            color: theme.palette.text.primary,
                                            '& fieldset': { borderColor: theme.palette.divider },
                                            '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                        },
                                    }}
                                />

                                <TextField
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={5}
                                    sx={{
                                        bgcolor: theme.palette.background.paper,
                                        '& .MuiOutlinedInput-root': {
                                            color: theme.palette.text.primary,
                                            '& fieldset': { borderColor: theme.palette.divider },
                                            '&:hover fieldset': { borderColor: theme.palette.primary.main },
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    startIcon={<SendIcon />}
                                    disabled={isSubmitting}
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        color: "#fff",
                                        '&:hover': { bgcolor: theme.palette.secondary.main },
                                    }}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </Stack>
                        </Box>
                    </MotionBox>
                </Box>
            </Container>
        </Box>
    );
}
