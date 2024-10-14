import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Feed = () => {
    return (
        <Stack sx={{
            flexDirection: { 
                sx: "column", 
                md: "row"
            },
            background: '#000'
        }}>
            <Box sx={{ 
                height: { 
                    sx: 'auto', 
                    md: '92vh' 
                    },
                borderRight: '1px solid #3d3d3d',
                px: {
                    sx: 0,
                    md: 2
                }
                }}>
        {/* <Sidebar></Sidebar> */}
            <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}} >
                Copyright 2024 Foma Media
            </Typography>
            </Box>
        </Stack>
    )
}

export default Feed