"use client";

import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Paper,
    Chip,
    Stack, useTheme,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const timeline = [
    {
        type: "experience",
        icon: WorkIcon,
        title: "Frontend Developer Intern",
        company: "StartupXYZ",
        period: "Jan 2024 - May 2024",
        current: false,
        description:
            "Built responsive web interfaces and improved user experience for the main product. Worked closely with designers to implement pixel-perfect designs.",
        achievements: [
            "Redesigned landing page, increasing conversion by 25%",
            "Implemented component library used across 5+ projects",
            "Mentored 2 junior developers",
        ],
    },
    {
        type: "education",
        icon: SchoolIcon,
        title: "BSc Software Engineering",
        company: "University of Technology",
        period: "2023 - 2027 (Expected)",
        current: true,
        description:
            "2nd Year student specializing in software development and computer science. Maintaining strong academic performance while actively participating in tech clubs.",
        achievements: [
            "GPA: 3.8/4.0",
            "Dean's List: 2023, 2024",
            "President of Computer Science Society",
        ],
    },
    {
        type: "achievement",
        icon: EmojiEventsIcon,
        title: "Hackathon Winner",
        company: "National Tech Hackathon 2024",
        period: "Mar 2024",
        current: false,
        description:
            "Led a team of 4 to win 1st place by developing an AI-powered student learning platform in 48 hours.",
        achievements: [
            "Competed against 50+ teams",
            "Implemented ML model with 85% accuracy",
            "Featured in local tech news",
        ],
    },
    {
        type: "education",
        icon: AccountBalanceIcon,
        title: "High School Diploma",
        company: "Royal College",
        period: "2019 - 2022",
        current: false,
        description:
            "Completed Advanced Level examinations with distinction in Mathematics and Computer Science.",
        achievements: [
            "Top performer in district",
            "Led school robotics club",
            "Won inter-school coding competition",
        ],
    },
];

export default function Experience() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

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
                        {"<"}Experience & Education{" />"}
                    </Typography>

                    <Typography
                        align="center"
                        fontSize={14}
                        color="text.secondary"
                        mb={8}
                    >
                        My journey and milestones
                    </Typography>
                </motion.div>

                {/* Timeline */}
                <Stack spacing={6} position="relative">
                    {/* Vertical Line */}
                    <Box
                        position="absolute"
                        left={{ xs: 16, md: "50%" }}
                        top={0}
                        bottom={0}
                        width={2}
                        bgcolor={isDark ? "grey.700" : "grey.300"}
                        sx={{ transform: { md: "translateX(-50%)" } }}
                    />

                    {timeline.map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection={{
                                        xs: "row",
                                        md: isLeft ? "row" : "row-reverse",
                                    }}
                                    alignItems="flex-start"
                                    gap={3}
                                >
                                    {/* Icon */}
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg,#6366f1,#22d3ee)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            zIndex: 2,
                                            border: "4px solid",
                                            borderColor: isDark ? "#0f172a" : "#fff",
                                        }}
                                    >
                                        <Icon sx={{ color: "#fff" }} />
                                    </Box>

                                    {/* Card */}
                                    <Box flex={1} textAlign={{ md: isLeft ? "right" : "left" }}>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    p: { xs: 2, sm: 3 },
                                                    borderRadius: 3,
                                                    bgcolor: isDark ? "grey.900" : "#fff",
                                                }}
                                            >
                                                <Stack spacing={1}>
                                                    <Stack
                                                        direction="row"
                                                        spacing={1}
                                                        justifyContent={{
                                                            md: isLeft ? "flex-end" : "flex-start",
                                                        }}
                                                    >
                                                        <Typography fontWeight="bold">
                                                            {item.title}
                                                        </Typography>
                                                        {item.current && (
                                                            <Chip
                                                                label="Current"
                                                                size="small"
                                                                color="success"
                                                                variant="outlined"
                                                            />
                                                        )}
                                                    </Stack>

                                                    <Typography
                                                        color="primary"
                                                        fontWeight={500}
                                                        fontSize={14}
                                                    >
                                                        {item.company}
                                                    </Typography>

                                                    <Typography
                                                        fontSize={12}
                                                        color="text.secondary"
                                                    >
                                                        {item.period}
                                                    </Typography>

                                                    <Typography
                                                        fontSize={14}
                                                        color="text.secondary"
                                                    >
                                                        {item.description}
                                                    </Typography>

                                                    <Stack spacing={0.5}>
                                                        {item.achievements.map((a, i) => (
                                                            <Typography
                                                                key={i}
                                                                fontSize={13}
                                                                color="text.secondary"
                                                            >
                                                                ▸ {a}
                                                            </Typography>
                                                        ))}
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                        </motion.div>
                                    </Box>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Stack>
            </Container>
        </Box>
    );
}
