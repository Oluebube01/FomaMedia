import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import fetchFromAPI  from '../utils/fetchFromAPI.jsx'

import Sidebar from './SideBar.jsx'
import Videos from './Videos.jsx'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect( () => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory]);

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
        <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />
            <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}} >
                Copyright 2024 Foma Media
            </Typography>
            </Box>

            <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4"
                fontWeight="bold" mb={2} sx={{
                    color: 'white'
                }}>
                {selectedCategory} <span style={{ color: '#018abd'}}>Videos</span>
                </Typography>

                <Videos videos={[videos]} />
            </Box>
        </Stack>
    )
}

export default Feed