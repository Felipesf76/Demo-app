import React from 'react'
import {
    CssBaseline,
    Typography,
    Box,
} from '@mui/material'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Innovation } from '../../../../api/innovation/client'
import { useParams } from 'react-router-dom'
import Plot from 'react-plotly.js';

const InnovationResults = () => {
    const { projectName } = useParams()

    const isLoading = useSubscribe('innovation.results', projectName)
    const results = useFind(() => Innovation.find())

    const values = []
    const labels = []
    // // console.log(results[0]);
    // const algo = results[0].result
    // console.log(algo);
    for (const result of results) {
        for (const value of result.result) {
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
                    Resultados Innovación
                </Typography>
                <Plot
                    data={data}
                    layout={layout}
                />
            </Box>
        </CssBaseline>
    )
}

export default InnovationResults
