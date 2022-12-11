import React from 'react'
import {
    CssBaseline,
    Typography,
    Box,
} from '@mui/material'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { DigitalTransformation } from '../../../../api/digitalTransformation/client'
import { useParams } from 'react-router-dom'
import Plot from 'react-plotly.js';

const DigitalResults = () => {
    const { projectName } = useParams()

    const isLoading = useSubscribe('digitalTransformation.results', projectName)
    const results = useFind(() => DigitalTransformation.find())

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
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 5]
            }
        }
    }

    return (
        <CssBaseline>
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
                    heigth: 'auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        m: '50px',
                    }}
                >
                    Resultados Transformación Digital
                </Typography>
                <Plot
                    data={data}
                    layout={layout}
                />
            </Box>
        </CssBaseline>
    )
}

export default DigitalResults
