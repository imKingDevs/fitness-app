import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import Similarexercise from '../components/SimilarExercise'

const ExerciseDetail = () => {

    const [exerciseDetail, setexerciseDetail] = useState({})
    const [exerciseVideos, setexerciseVideos] = useState([])
    const [targetMuscleExercises, settargetMuscleExercises] = useState([])
    const [equipmentExercises, setequipmentExercises] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
            const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setexerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setexerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            settargetMuscleExercises(targetMuscleExercisesData);
            
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setequipmentExercises(equipmentExercisesData);
        }
        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}></Detail>
            <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>
            {/* <Similarexercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}></Similarexercise> */}
        </Box>
    )
}

export default ExerciseDetail