import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, CssBaseline, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'

const DigitalCulture = () => {
    const { projectName } = useParams()
    const [value, setValue] = useState({
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 0,
        point5: 0,
        point6: 0,
        point7: 0,
        point8: 0,
    })

    const handleSave = () => {
        const array = [
            value.point1,
            value.point2,
            value.point3,
            value.point4,
            value.point5,
            value.point6,
            value.point7,
            value.point8
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'digitalCulture.insert',
            newValue
        )
        const strategyResult = {
            label: 'Cultura',
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
                    Cuestionario Cultura
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
                        label='1. ¿Todos en la organización reconocen la importancia de la transformación digital?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿Reconocen la importancia del buen uso de la tecnología para potenciar el negocio?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿El recurso humano de la empresa no presenta un alto nivel de resistencia al cambio?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿La cultura de la organización permite agregar valor a cliente interno y externo por medio de herramientas digitales?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La empresa ofrece beneficios de valor para el equipo de trabajo?'
                    />
                    <RadioButton
                        value={value.point6}
                        setValue={setValue}
                        object={value}
                        questionNumber='point6'
                        label='6. ¿La empresa realiza programas de sensibilización y capacitación a su equipo de trabajo para generar adoptar la transformación como parte de su ADN corporativo?'
                    />
                    <RadioButton
                        value={value.point7}
                        setValue={setValue}
                        object={value}
                        questionNumber='point7'
                        label='7. ¿La empresa frecuentemente ofrece espacios de capacitaciones de habilidades digitales para los trabajadores?'
                    />
                    <RadioButton
                        value={value.point8}
                        setValue={setValue}
                        object={value}
                        questionNumber='point8'
                        label='8. ¿La empresa cuenta con canales de comunicación, demostrando compromiso y motivación para los procesos y proyectos de transformación digital?'
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

export default DigitalCulture
