import React, { useState } from 'react'
import MainProyect from '../components/mainProject/MainProyect'
import { Box, Grid, Typography } from '@mui/material'

const Home = () => {

    const companies = [
        {
            name: 'GAMMA INGENIEROS',
            logo: 'images/gamma logo.png',
            color: '#000'
        },
        {
            name: 'POLITÉCNICO GRAN COLOMBIANO',
            logo: 'images/poli logo.png',
            color: '#000'
        },
        {
            name: 'UNIVERSIDAD SANTO TOMÁS',
            logo: 'images/usta.png',
            color: '#fff'
        },
        {
            name: 'FUNDACIÓN TECNALIA COLOMBIA',
            logo: 'images/tecnalia-logo-color.png',
            color: '#fff'
        },
        {
            name: 'MGM INGENIERÍA Y PROYECTOS',
            logo: 'images/mgm ingenieros.png',
            color: '#000'
        },
        {
            name: 'GRUPO VISTA',
            logo: 'images/logo grupo vista.jpeg',
            color: '#fff'
        },

    ]

    return (
        <>
            <MainProyect >
                <Box
                    sx={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            textAlign: 'center',
                            mt: '45px',
                            mb: '30px',
                        }}
                    >
                        NUESTRO ANÁLISIS DE NIVEL DE MADUREZ
                        <br />
                        ES APLICABLE A EMPRESAS DE CUALQUIER SECTOR Y TAMAÑO
                    </Typography>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {
                            companies.map((company) => (
                                <Grid
                                    key={company.name}
                                    item
                                    xs={6}
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={company.logo}
                                        style={{
                                            height: '100px',
                                            width: '300px',
                                            marginTop: '15px',
                                            backgroundColor: company.color,
                                            placeSelf: 'center',
                                            padding: 5
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        color="initial"
                                        sx={{
                                            mt: 2,
                                            fontSize: '1.5em',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {company.name}
                                    </Typography>
                                </Grid>

                            ))
                        }
                    </Grid>
                </Box >
            </MainProyect >
        </>
    )
}

export default Home
