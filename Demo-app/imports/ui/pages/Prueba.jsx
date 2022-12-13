import React from 'react'
import MainProyect from '../components/mainProject/MainProyect'
import {
    Box,
    Grid,
    Typography
} from '@mui/material'

const Prueba = () => {
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
                    color='#fff'
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
                            </Grid>

                        ))
                    }
                </Grid>
            </Box >
        </MainProyect >
    )
}

export default Prueba
