import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'
import ResponsiveAppBar from '../components/mainProject/AppBar'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Projects } from '../../api/projects/client'
import {
    CssBaseline,
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    Modal,
    Fab,
    TextField,
    Button,
    MenuItem
} from '@mui/material'

import { Link } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add';

import MainProyect from '../components/mainProject/MainProyect'

const ProjectsPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [projectName, setProjectName] = useState('')
    const [projectSector, setProjectSector] = useState('')
    const [projectSize, setProjectSize] = useState('')
    const sectors = [
        {
            value: 'Educación',
            name: 'Educación'
        },
        {
            value: 'Tecnología e Innovación',
            name: 'Tecnología e Innovación'
        },
        {
            value: 'Óptico',
            name: 'Óptico',
        },
        {
            value: 'Industrial',
            name: 'Industrial',
        },
        {
            value: 'Obras Civiles',
            name: 'Obras Civiles',
        },
    ]

    const sizes = [
        {
            value: 'Grande',
            name: 'Grande',
        },
        {
            value: 'Mediana',
            name: 'Mediana',
        },
        {
            value: 'Pequeña',
            name: 'Pequeña',
        }
    ]


    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleAddProject = () => {
        const newProject = {
            name: projectName,
            user: Meteor.user().emails[0].address,
            companieSector: projectSector,
            companieSize: projectSize
        }
        Meteor.call(
            'projects.insert',
            newProject
        )
        Meteor.call(
            'innovation.insert',
            newProject
        )
        Meteor.call(
            'digitalTransformation.insert',
            newProject
        )
        Meteor.call(
            'industry.insert',
            newProject
        )
        handleClose();
    }

    const isLoading = useSubscribe('projects.list');
    const projects = useFind(() => Projects.find())


    return (
        <>
            <MainProyect>
                <Box
                    sx={{
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >


                    <Typography
                        sx={{
                            mt: '30px',
                            fontSize: '3em'
                        }}
                    >
                        TUS PROYECTOS
                    </Typography>

                    <Fab
                        variant="extended"
                        sx={{
                            position: 'relative',
                            left: '250px',
                            mt: '30px'
                        }}
                        onClick={handleOpen}
                    >
                        <AddIcon sx={{ mr: 1 }} />
                        Nuevo
                    </Fab>
                    <Box
                        sx={{
                            width: '600px',
                        }}
                    >

                        <List>
                            {
                                projects.map((project) => (
                                    <ListItem
                                        divider
                                        sx={{ display: 'flex' }}
                                        key={project._id}
                                    >
                                        <Link
                                            to={`/home/projects/${project.name}`}
                                            style={{
                                                width: '100%',
                                                textDecoration: 'none',
                                                color: '#000'
                                            }}
                                        >
                                            <ListItemButton>
                                                <Typography>{project.name}</Typography>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>

                </Box>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            height: 475,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'space-around'
                        }}

                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                mb: 2
                            }}
                        >
                            Ingrese el nombre del proyecto
                        </Typography>
                        <TextField
                            label='Nombre de Proyecto'
                            value={projectName}
                            fullWidth
                            onChange={(event) => setProjectName(event.target.value)}
                            sx={{
                                mb: 2
                            }}
                        />
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{
                                mb: 2
                            }}
                        >
                            Ingrese el sector de la empresa
                        </Typography>
                        <TextField
                            select
                            label='Sector de Empresa'
                            fullWidth
                            value={projectSector}
                            onChange={(event) => setProjectSector(event.target.value)}
                            sx={{
                                mb: 2
                            }}
                        >
                            {
                                sectors.map((sector) => (
                                    <MenuItem key={sector.value} value={sector.value} >
                                        {sector.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <Typography
                            id="modal-modal"
                            variant="h6"
                            component="h2"
                            sx={{
                                mb: 2
                            }}
                        >
                            Ingrese el tamaño de la empresa
                        </Typography>
                        <TextField
                            fullWidth
                            select
                            label='Tamaño de la empresa'
                            value={projectSize}
                            onChange={(event) => setProjectSize(event.target.value)}
                            sx={{
                                mb: 2
                            }}
                        >
                            {
                                sizes.map((size) => (
                                    <MenuItem key={size.value} value={size.value} >
                                        {size.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                mt: 1
                            }}
                        >
                            <Button
                                onClick={handleClose}
                                variant='contained'
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={handleAddProject}
                                variant='contained'
                            >
                                Aceptar
                            </Button>
                        </Box>
                    </Box>
                </Modal>


            </MainProyect>

        </>
    )
}

export default ProjectsPage
