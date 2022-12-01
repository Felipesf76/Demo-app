import React from 'react'
import ResponsiveAppBar from '../components/mainProyect/AppBar'
import { CssBaseline } from '@mui/material'

const Home = () => {
    return (
        <>
            <CssBaseline>
                <ResponsiveAppBar />
                <div>Home</div>
            </CssBaseline>
        </>
    )
}

export default Home
