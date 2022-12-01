import React from 'react'
import ResponsiveAppBar from '../components/mainProyect/AppBar'
import {
    CssBaseline,
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Fab
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add';

const Proyects = () => {
    return (
        <>
            <CssBaseline>
                <ResponsiveAppBar />
                <Box
                    sx={{
                        width: '100vw',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '50vw',
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >


                        <Typography
                            sx={{
                                mt: '10px',
                                fontSize: '3em'
                            }}
                        >
                            TUS PROYECTOS
                        </Typography>

                        <Fab
                            variant="extended"
                            sx={{
                                position: 'relative',
                                left: '150px'
                            }}
                        >
                            <AddIcon sx={{ mr: 1 }} />
                            Nuevo
                        </Fab>

                        <List>
                            <ListItem
                                divider
                            >
                                <ListItemButton
                                    fullWidth
                                >
                                    <Typography>Prueba</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                fullWidth
                                divider
                            >
                                <ListItemButton>
                                    <Typography>Prueb</Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>

                </Box>


            </CssBaseline>

        </>
    )
}

export default Proyects
