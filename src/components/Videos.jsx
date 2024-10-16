import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
    return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>    
        {videos?.map((item, idx) => (   
        <Box key={idx}>
                {item?.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
            ))}
    </Stack>
    )
}

export default Videos