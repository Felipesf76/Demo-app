import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IndustryStrategy = () => {
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
            'industryStrategy.insert',
            newValue
        )
        const strategyResult = {
            label: 'Estrategia',
            value: result
        }
        Meteor.call(
            'industry.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/industry4.0/digitalSkills`)
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
                        label='1. ??La empresa cuenta con suscripci??n con fabricantes (AWS, Google Cloud, Microsoft Azure, etc) o servidor de correo electr??nico?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ??La empresa cuenta con bases de datos referentes a diversas ??reas que conforman la organizaci??n?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ??La empresa optimiza recursos haciendo uso de nuevas tecnolog??as?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ??La empresa genera datos por medio del uso de diferentes tecnolog??as?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ??La data recolectada es utilizada para la toma de decisiones?'
                    />
                    <RadioButton
                        value={value.point6}
                        setValue={setValue}
                        object={value}
                        questionNumber='point6'
                        label='6. ??La empresa genera controles y procedimientos de riesgos como ethical hacking para su identificaci??n?'
                    />
                    <RadioButton
                        value={value.point7}
                        setValue={setValue}
                        object={value}
                        questionNumber='point7'
                        label='7. ??La empresa combina diferentes datos para generar un an??lisis de predicciones de mercado?'
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
                        to={`/home/projects/${projectName}/industry4.0/persons`}
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
                            Personas/Cultura
                        </Button>
                    </Link>
                    <Button
                        variant='text'
                        onClick={handleSave}
                        endIcon={<ArrowForwardIcon />}
                        color='inherit'
                    >
                        Competencias Digitales
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default IndustryStrategy
