import { Box, CssBaseline, Typography, Button } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ResponsiveAppBar from '../../../components/mainProject/AppBar'

const Innovation = () => {
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
          EJES ESTRATEGICOS INNOVACIÓN
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
            to={`/home/projects/${projectName}/innovation/strategy`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              Estrategia
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/leadership`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              Liderazgo
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/humanResources`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              Recursos Humanos
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/investigation`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              I+D
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/culture`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              Cultura
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/technology`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button variant="contained" color="primary">
              Tecnología
            </Button>
          </Link>
          <Link
            to={`/home/projects/${projectName}/innovation/results`}
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

export default Innovation
