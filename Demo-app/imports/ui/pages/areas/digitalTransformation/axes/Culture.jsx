import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import MainProyect from '../../../../components/mainProject/MainProyect'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DigitalCulture = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
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
        navigate(`/home/projects/${projectName}/digitalTransformation/technology`)
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
                    Cuestionario Cultura
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
                        to={`/home/projects/${projectName}/digitalTransformation/strategy`}
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
                        Tecnología
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default DigitalCulture
