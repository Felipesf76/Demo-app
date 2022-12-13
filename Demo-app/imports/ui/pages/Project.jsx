import React from 'react'
import {
  CssBaseline,
  Box,
  Typography, Button,
} from '@mui/material'
import { useParams, Link } from 'react-router-dom'
import MainProyect from '../components/mainProject/MainProyect'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Projects } from '../../api/projects/client'

const Project = () => {
  const { projectName } = useParams()
  const isLoading = useSubscribe('project.name', projectName)
  const project = useFind(() => Projects.find())
  return (

    <MainProyect>
      <Box
        sx={{
          display: 'flex',
          height: 'auto',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: '30px',
          }}
        >
          {projectName}
        </Typography>
        <Box
          sx={{
            mt: '30px',
            display: 'flex',
            width: '100%',
            height: 'auto',
            justifyContent: 'space-around'
          }}
        >

          <Typography
            variant="h4"
          >
            Sector: {project[0].companieSector}
          </Typography>
          <Typography
            variant="h4"
          >
            Tamaño: {project[0].companieSize}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: '150px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Link
            to={`/home/projects/${projectName}/innovation`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                height: '70px',
                fontSize: '1em'
              }}
            >
              Innovación
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/digitalTransformation`}
            style={{ textDecoration: 'none' }}

          >
            <Button
              variant="contained"
              sx={{
                height: '70px',
                fontSize: '1em'
              }}
            >
              Transformación Digital
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/industry4.0`}
            style={{
              textDecoration: 'none'
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: '70px',
                fontSize: '1em'
              }}
            >
              Industria 4.0
            </Button>
          </Link>
        </Box>


      </Box>


    </MainProyect>

  )
}

export default Project
