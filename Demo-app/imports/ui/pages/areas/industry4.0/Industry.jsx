import React from 'react'
import { Box, CssBaseline, Typography, Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import ResponsiveAppBar from '../../../components/mainProject/AppBar'

const Industry = () => {
    const { projectName } = useParams()
    return (
        <CssBaseline>
            <ResponsiveAppBar />
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
                    height: 'auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    color="initial"
                    sx={{ mt: '50px' }}
                >
                    EJES ESTRATEGICOS INDUSTRIA 4.0
                </Typography>
                <Box
                    sx={{
                        mt: '200px',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
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
                    <Link
                        to={`/home/projects/${projectName}/industry4.0/results`}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Button variant="contained" color="primary">
                            Resultados
                        </Button>
                    </Link>
                </Box>
            </Box>
        </CssBaseline>
    )
}

export default Industry
