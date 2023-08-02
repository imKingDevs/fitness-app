import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setbodyPart }) => {
    return (
        <Stack type='button'  style={{userSelect: 'none'}} alignItems='center' justifyContent='center' className='bodyPart-card' sx={{ borderTop: '4px solid', borderTopColor: bodyPart === item ? '#ff2625' : '#0000', backgroundColor: '#eee', borderBottomLeftRadius: '20px', width: '270px', height:'280px', cursor: 'pointer', gap: '47px'}} onClick={() => {
            setbodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior:'smooth'})
        }}>
            <img src={Icon} style={{width: '40px', height: '40px'}} />
            <Typography fontSize='24px' fontWeight='bold' color='#ff2625' textTransform='capitalize' fontFamily='Verdana'>{item}</Typography>
        </Stack>
    )
}

export default BodyPart