import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {

    const [bodyPart, setbodyPart] = useState('all')
    const [exercises, setexercises] = useState([])

    console.log(bodyPart)

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
            <Exercises setexercises={setexercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Home