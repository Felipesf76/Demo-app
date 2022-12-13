import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import MainProyect from '../../../components/mainProject/MainProyect'
import Plot from 'react-plotly.js';
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Industry } from '../../../../api/industry/client'

const IndustryPage = () => {
    const { projectName } = useParams()

    const isLoading = useSubscribe('industry.results', projectName)
    const results = useFind(() => Industry.find())

    const values = []
    const labels = []


    for (const result of results) {

        for (const value of result.results) {
            values.push(value.value)
            labels.push(value.label)
        }
    }

    data = [
        {
            type: 'scatterpolar',
            r: values,
            theta: labels,
            fill: 'toself',
            name: 'Group A'
        },
    ]

    layout = {
        width: 565,
        height: 400,
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 5]
            }
        }
    }

    return (
        <MainProyect>
            <Box
                sx={{
                    display: 'flex',
                    height: 'auto',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        height: '300px',
                        pl: 10,
                        pr: 20,
                        pt: 4
                    }}
                >
                    <Typography
                        variant="h3"
                        color="initial"
                    >
                        EJES ESTRATEGICOS INDUSTRIA 4.0
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mt: 3,
                        width: '47%',
                        height: '300px',
                    }}
                >
                    <Typography
                        variant="h5"
                        color="initial"
                        sx={{
                            mb: 1
                        }}
                    >
                        Resultado
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            width: '100%',
                            height: 400,
                            left: 0,
                            top: 0
                        }}
                    >
                        <Plot
                            data={data}
                            layout={layout}
                        />
                    </Paper>
                </Box>

                <Box
                    sx={{
                        mt: '200px',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            textAlign: 'left'
                        }}
                    >
                        Cuestionarios
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            width: '90%',
                            height: '150px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}
                    >
                        <Link
                            to={`/home/projects/${projectName}/industry4.0/technology`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="contained" color="primary">
                                Tecnología
                            </Button>
                        </Link>
                        <Link
                            to={`/home/projects/${projectName}/industry4.0/persons`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="contained" color="primary">
                                Personas/Cultura
                            </Button>
                        </Link>
                        <Link
                            to={`/home/projects/${projectName}/industry4.0/strategy`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="contained" color="primary">
                                Estrategia
                            </Button>
                        </Link>
                        <Link
                            to={`/home/projects/${projectName}/industry4.0/digitalSkills`}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <Button variant="contained" color="primary">
                                Competencias Digitales
                            </Button>
                        </Link>
                    </Paper>
                </Box>
            </Box>
        </MainProyect>
    )
}

export default IndustryPage
