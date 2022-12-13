import React, { useState } from 'react'
import { Box, Button, CssBaseline, Divider, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Strategy = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 0,
        point5: 0
    })

    const handleSave = () => {
        const array = [
            value.point1,
            value.point2,
            value.point3,
            value.point4,
            value.point5,
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'innovationStrategy.insert',
            newValue
        )
        const strategyResult = {
            label: 'Estrategia',
            value: result
        }
        Meteor.call(
            'innovation.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/innovation/leadership`)
    }

    return (
        <MainProyect>
            <Box
                sx={{
                    display: 'flex',
                    height: 'auto',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="h3"
                    color="initial"
                    sx={{ m: 7 }}
                >
                    Cuestionario Estrategia
                </Typography>
                <Box
                    sx={{
                        width: '70%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    <RadioButton
                        value={value.point1}
                        setValue={setValue}
                        object={value}
                        questionNumber='point1'
                        label='1. ¿En la empresa se realizan planes estratégicos y de proyección a largo plazo?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿Las ideas generadas están enfocadas al cliente interno y externo?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Los objetivos principales de la empresa están alineados con la innovación?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿Se establece una hoja de ruta para el proceso de innovación?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La empresa ha lanzado nuevos productos al mercado en los últimos 3 años?'
                    />
                    <Divider
                        variant='fullWidth'
                        sx={{
                            mt: 3
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: '70%',
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        variant='text'
                        onClick={handleSave}
                        endIcon={<ArrowForwardIcon />}
                        color='inherit'
                    >
                        Liderazgo
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default Strategy
