import {Box, Typography} from "@mui/material";

export default function CodeSkills (){
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
            <Typography>CodeSkills Section</Typography>
        </Box>
    )
}
