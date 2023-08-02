import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position='static' p='20px'>
            <Typography color="#ff2625" fontWeight={600} fontSize="26px">
                Fitness Cub
            </Typography>
            <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'40px'}}} mb='23px' mt="30px">
                Sweat, Smile <br/> and repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant='contained' color='error' sx={{background: '#ff2625', padding: '10px'}} href='#exercises'>Explore Exetcises</Button>
            <Typography fontWeight={600} color="#ff2625" sx={{opacity: 0.1, display: {lg:'block', xs:'none'}}} fontSize="200px">
                Exercise
            </Typography>
            <img src={HeroBannerImg} alt="banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner