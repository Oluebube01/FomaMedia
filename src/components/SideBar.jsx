import { Stack } from '@mui/material';

import { categories } from '../utils/constants'

const selectedCategory = 'New';

const SideBar = () => (
    <Stack
        direction="row"
        sx={{
            overflow: "auto",
            height: { sx: "auto", md: '95%'},
            flexDirection: { md: 'column' },
        }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#018abd',
                    color: 'white'
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? 'white' : '#018abd', marginRight: '15px'}}>{category.Icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default SideBar