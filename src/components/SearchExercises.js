import React, { useEffect, useState } from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = ({setexercises, bodyPart, setbodyPart}) => {

    const [search, setsearch] = useState('')
    const [bodyParts, setbodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setbodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData();
    }, [])


    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const serachExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            )

            setsearch('');
            setexercises(serachExercises);
        }
    }

    return (
        <Stack alignItems='center' mt="37px" justifyContent="center" p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign='center'>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField value={search} onChange={(e) => { setsearch(e.target.value.toLowerCase()) }} sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '400px' }, backgroundColor: '#fff', borderRadius: '40px', paddingRight: { lg: '175px', xs: '80px' } }} type='text' height='76px' placeholder="Search Exercises"></TextField>
                <Button onClick={handleSearch} className='search-btn' sx={{ bgcolor: '#ff2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0' }}>Search</Button>
            </Box>
            <Box sx={{position: 'relative', width: '100vw'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} isbodyParts/>
            </Box>
        </Stack>
    )
}

export default SearchExercises