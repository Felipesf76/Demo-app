import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import MainProyect from '../../../../components/mainProject/MainProyect'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DigitalStrategy = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
    const [value, setValue] = useState({
        point1: 0,
        point2: 0,
        point3: 0,
        point4: 0,
        point5: 0,
        point6: 0,
        point7: 0
    })

    const handleSave = () => {
        const array = [
            value.point1,
            value.point2,
            value.point3,
            value.point4,
            value.point5,
            value.point6,
            value.point7
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'digitalStrategy.insert',
            newValue
        )
        const strategyResult = {
            label: 'Estrategia',
            value: result
        }
        Meteor.call(
            'digitalTransformation.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/digitalTransformation/culture`)
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
                        flexDirection: 'column'
                    }}
                >

                    <RadioButton
                        value={value.point1}
                        setValue={setValue}
                        object={value}
                        questionNumber='point1'
                        label='1. ¿La empresa realiza actualizaciones en el portafolio de acuerdo a la demanda y tendencias del mercado?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿La empresa cuenta con procesos de control de calidad antes de lanzar su producto/servicio al mercado?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Existe relación de los objetivos y visión de la empresa con la visión/objetivos de transformación digital?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿La empresa cuenta con presupuesto anual para Transformación digital? Si la empresa no cuenta con presupuesto para procesos de transformación digital marque cero “0”'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿La empresa hace uso de los datos en la toma de decisiones?'
                    />
                    <RadioButton
                        value={value.point6}
                        setValue={setValue}
                        object={value}
                        questionNumber='point6'
                        label='6. ¿La empresa cuenta con espacios estratégicos para potencializar la transformación digital en la organización? Marque 0 si no cuenta con espacios y 5 si cuenta con diversos espacios.'
                    />
                    <RadioButton
                        value={value.point7}
                        setValue={setValue}
                        object={value}
                        questionNumber='point7'
                        label='7. ¿La empresa cuenta con proyectos que permiten transformar por medio de la tecnología a corto o mediano plazo sus procesos?'
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
                        to={`/home/projects/${projectName}/digitalTransformation/client`}
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
                            Cliente
                        </Button>
                    </Link>
                    <Button
                        variant='text'
                        onClick={handleSave}
                        endIcon={<ArrowForwardIcon />}
                        color='inherit'
                    >
                        Cultura
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default DigitalStrategy
