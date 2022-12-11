import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, CssBaseline, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'

const DigitalTechnology = () => {
    const { projectName } = useParams()
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
                    Cuestionario Tecnología
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

export default DigitalTechnology
