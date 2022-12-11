import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, CssBaseline, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'

const IndustryPersons = () => {
    const { projectName } = useParams()
    const [value, setValue] = useState({
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 0
    })

    const handleSave = () => {
        const array = [
            value.point1,
            value.point2,
            value.point3,
            value.point4
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'industryPersons.insert',
            newValue
        )
        const strategyResult = {
            label: 'Personas/Cultura',
            value: result
        }
        Meteor.call(
            'industry.update',
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
                    Cuestionario Personas/Cultura
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
                        label='1. ¿El equipo de la organización usa alguna metodología ágil para aplicar análisis de datos, desarrollo, etc?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿Qué capacidad de cambio tiene la organización?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Se generan espacios para analizar la posibilidad de implementar nuevas tecnologías en la organización?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿El equipo de trabajo realiza operatividad y estrategia por medio de un sistema de indicadores?'
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

export default IndustryPersons
