import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Client = () => {
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
            'digitalClient.insert',
            newValue
        )
        const strategyResult = {
            label: 'Cliente',
            value: result
        }
        Meteor.call(
            'digitalTransformation.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/digitalTransformation/strategy`)
    }

    return (
        <MainProyect>
            <Box
                sx={{
                    display: 'flex',
                    height: 'auto',
                    alignItems: 'center',
                    flexDirection: 'column',
                    mt: 6
                }}
            >
                <Typography
                    variant="h3"
                    color="initial"
                >
                    Cuestionario Cliente
                </Typography>
                <Box
                    sx={{
                        width: '70%',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 4
                    }}
                >

                    <RadioButton
                        value={value.point1}
                        setValue={setValue}
                        object={value}
                        questionNumber='point1'
                        label='1. ¿La empresa aplica estrategias de omnicanalidad para publicar su información con sus clientes?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿La empresa tiene definida una estrategia para fidelizar y tener cercanía con el cliente?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿La empresa qué tanto conoce a sus clientes?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿Qué tan diferencial es la experiencia de compra y los productos/Servicios que ofrece a sus clientes?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿Regularmente la empresa gestiona adecuadamente la información para mejorar la experiencia de sus clientes?'
                    />
                    <RadioButton
                        value={value.point6}
                        setValue={setValue}
                        object={value}
                        questionNumber='point6'
                        label='6. ¿La empresa cuenta con una estrategia sólida de marketing digital?'
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
                        Estrategia
                    </Button>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default Client
