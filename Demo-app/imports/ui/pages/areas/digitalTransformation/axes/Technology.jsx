import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import MainProyect from '../../../../components/mainProject/MainProyect'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DigitalTechnology = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 0,
        point5: 0,
        point6: 0
    })

    const handleSave = () => {
        const array = [
            value.point1,
            value.point2,
            value.point3,
            value.point4,
            value.point5,
            value.point6
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'digitalTechnology.insert',
            newValue
        )
        const strategyResult = {
            label: 'Tecnología',
            value: result
        }
        Meteor.call(
            'digitalTransformation.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/digitalTransformation`)
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
                    Cuestionario Tecnología
                </Typography>
                <Box
                    sx={{
                        width: '70%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >

                    <RadioButton
                        value={value.point1}
                        setValue={setValue}
                        object={value}
                        questionNumber='point1'
                        label='1. ¿La empresa cuenta con planes de diseño y mejoramiento de los procesos internos?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿La empresa cuenta con los métodos de trazabilidad pertinentes para su operación por medio de herramientas tecnológicas?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Con qué frecuencia la empresa ha actualizado los equipos de cómputo y otras herramientas?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿El equipo de trabajo cuenta con certificados en el uso de herramientas digitales como Hubspot, Oracle, Google, etc.?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La empresa hace uso de herramientas tecnológicas para la toma de decisiones asertivas?'
                    />
                    <RadioButton
                        value={value.point6}
                        setValue={setValue}
                        object={value}
                        questionNumber='point6'
                        label='6. ¿Cómo calificaría la implementación de las tecnologías en las diferentes perspectivas de la empresa?'
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
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Link
                        to={`/home/projects/${projectName}/digitalTransformation/culture`}
                        style={{
                            textDecoration: 'none',
                            color: '#000'
                        }}
                    >
                        <Button
                            variant='text'
                            startIcon={<ArrowBackIcon />}
                            color='inherit'
                        >
                            Cultura
                        </Button>
                    </Link>
                    <Button
                        variant='text'
                        onClick={handleSave}
                        endIcon={<ArrowForwardIcon />}
                        color='inherit'
                    >
                        Finalizar
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default DigitalTechnology
