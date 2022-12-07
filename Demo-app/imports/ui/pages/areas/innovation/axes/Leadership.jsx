import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, CssBaseline, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'

const Leadership = () => {
    const { projectName } = useParams()
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
            value,
            result
        }
        Meteor.call(
            'innovationLeadership.insert',
            newValue
        )
        const strategyResult = {
            label: 'Liderazgo',
            value: result
        }
        Meteor.call(
            'innovation.update',
            projectName,
            strategyResult
        )
    }

    return (
        <CssBaseline>
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
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
                    Cuestionario Liderazgo
                </Typography>
                <Box
                    sx={{
                        width: '70%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        mb: 7
                    }}
                >

                    <RadioButton
                        value={value.point1}
                        setValue={setValue}
                        object={value}
                        questionNumber='point1'
                        label='1. ¿Los líderes de su empresa ayudan a sus equipos en todos los aspectos para generar crecimiento personal y profesional?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿La empresa fomenta la aplicación de metodologías ágiles para el desarrollo de tareas laborales?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Los lideres cuentan con la libertad necesaria de potencializar la innovación en cada una de las áreas de la empresa?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿Se comunica la importancia de la innovación en los equipos de trabajo?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La empresa ofrece a su equipo de trabajo espacios donde todos desarrollen habilidades de liderazgo?'
                    />

                </Box>
                <Button
                    variant='contained'
                    onClick={handleSave}
                >
                    Guardar
                </Button>
            </Box>
        </CssBaseline>
    )
}

export default Leadership
