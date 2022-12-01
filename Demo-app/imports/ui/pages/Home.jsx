import React from 'react'
import ResponsiveAppBar from '../components/mainProyect/AppBar'
import { Box, CssBaseline, Typography } from '@mui/material'

const Home = () => {

    const companies = [
        {
            name: 'GAMMA INGENIEROS',
            logo: 'images/gamma logo.png',
        },
        {
            name: 'POLITÉCNICO GRAN COLOMBIANO',
            logo: 'images/poli logo.png',
        },
        {
            name: 'UNIVERSIDAD SANTO TOMÁS',
            logo: 'images/usta.png',
        },
        {
            name: 'FUNDACIÓN TECNALIA COLOMBIA',
            logo: 'images/tecnalia-logo-color.png',
        },
        {
            name: 'MGM INGENIERÍA Y PROYECTOS',
            logo: 'images/mgm ingenieros.png',
        },
        {
            name: 'GRUPO VISTA',
            logo: 'images/logo grupo vista.jpeg',
        },

    ]

    return (
        <>
            <CssBaseline>
                <ResponsiveAppBar />
                <Box
                    sx={{
                        width: '100vw',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
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
                    <Box
                        sx={{
                            width: '100vw',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}
                    >
                        {
                            companies.map((company) => (
                                <Box
                                    key={company.name}
                                    backgroundColor='grey'
                                    height='200px'
                                    width='400px'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mt: 2,
                                        mb: 2
                                    }}
                                >
                                    <img
                                        src={company.logo}
                                        style={{
                                            height: '80px',
                                            width: '300px',
                                            marginTop: '15px',
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
                                </Box>

                            ))
                        }
                    </Box>
                </Box>

            </CssBaseline>
        </>
    )
}

export default Home
