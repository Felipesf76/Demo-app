import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IndustrySkills = () => {
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
            value.point5
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'industrySkills.insert',
            newValue
        )
        const strategyResult = {
            label: 'Competencias Digitales',
            value: result
        }
        Meteor.call(
            'industry.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/industry4.0`)
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
                    Cuestionario Competencias Digitales
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
                        label='1. ¿Todo el equipo de la organización es consciente de la importancia del uso de las nuevas tecnologías?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿La empresa genera espacios de actualización relacionado con las nuevas tecnologías?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿La empresa promueve campañas de marketing digital?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿El equipo de trabajo tiene conocimiento detallado de las herramientas tecnológicas que suministra la organización?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La tecnología es un medio para resolver los problemas causando un menor impacto?'
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
                        to={`/home/projects/${projectName}/industry4.0/strategy`}
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
                            Estrategia
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

export default IndustrySkills
