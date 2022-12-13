import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const IndustryTechnology = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
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
            'industryTechnology.insert',
            newValue
        )
        const strategyResult = {
            label: 'Tecnología',
            value: result
        }
        Meteor.call(
            'industry.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/industry4.0/persons`)
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
                        label='1. ¿La empresa implementa tecnologías como ciberseguridad, cloud y big data?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿Qué tan fundamental es la tecnología en los productos/servicios ofrecidos?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿La empresa tiene planes de continuidad de negocios de gestión de riesgos?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿La empresa cuenta con entornos de desarrollo de pruebas, seguimiento y gestión de servicios para realizar implementaciones de soluciones tecnológicas?'
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
                        Personas/Cultura
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default IndustryTechnology
