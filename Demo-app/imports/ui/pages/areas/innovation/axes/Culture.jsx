import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Box, Button, Divider, Typography } from '@mui/material'
import RadioButton from '../../../../components/forms/RadioButton'
import average from '../../../../components/operations/average'
import MainProyect from '../../../../components/mainProject/MainProyect'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Culture = () => {
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
            value.point5,
        ]
        const result = average(array)
        const newValue = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            value,
            result
        }
        Meteor.call(
            'innovationCulture.insert',
            newValue
        )
        const strategyResult = {
            label: 'Cultura',
            value: result
        }
        Meteor.call(
            'innovation.update',
            projectName,
            strategyResult
        )
        navigate(`/home/projects/${projectName}/innovation/technology`)
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
                    sx={{ m: 6 }}
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
                        label='1. ¿Existe una cultura de innovación en la empresa?'
                    />
                    <RadioButton
                        value={value.point2}
                        setValue={setValue}
                        object={value}
                        questionNumber='point2'
                        label='2. ¿Qué tan importante se considera el área de innovación en la empresa?'
                    />
                    <RadioButton
                        value={value.point3}
                        setValue={setValue}
                        object={value}
                        questionNumber='point3'
                        label='3. ¿Se transmite la innovación como un factor fundamental en la empresa?'
                    />
                    <RadioButton
                        value={value.point4}
                        setValue={setValue}
                        object={value}
                        questionNumber='point4'
                        label='4. ¿La empresa hace uso de fuentes formales e informales para fortalecer el conocimiento del recurso humano para innovar?'
                    />
                    <RadioButton
                        value={value.point5}
                        setValue={setValue}
                        object={value}
                        questionNumber='point5'
                        label='5. ¿Se considera la innovación como un proceso continuo?'
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
                        to={`/home/projects/${projectName}/innovation/investigation`}
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
                            I+D
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

export default Culture
