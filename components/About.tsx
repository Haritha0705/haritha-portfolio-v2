import {Box, Typography} from "@mui/material";

export default function About (){
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                p: 4,
            }}
        >
            <Typography>About Section</Typography>
        </Box>
    )
}
