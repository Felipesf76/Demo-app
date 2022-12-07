import React from 'react'
import {
  CssBaseline,
  Box,
  Typography, Button,
} from '@mui/material'
import ResponsiveAppBar from '../components/mainProject/AppBar'
import { useParams, Link } from 'react-router-dom'

const Project = () => {
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
            width: '100vw',
            height: 'auto',
            justifyContent: 'space-around'
          }}
        >
          <Typography
            variant="h4"
          >
            Sector
          </Typography>
          <Typography
            variant="h4"
          >
            Tamaño
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
          >
            <Button
              variant="contained"
              sx={{
                fontSize: '1em'
              }}
            >
              Transformación Digital
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              fontSize: '1em'
            }}
          >
            Industria 4.0
          </Button>
        </Box>


      </Box>


    </CssBaseline>

  )
}

export default Project
