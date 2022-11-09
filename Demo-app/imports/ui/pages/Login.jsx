import React, { useState } from 'react'
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { TextFieldValidation } from '../components/TextField';
import { useNavigate, Link } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton'
//import background from '../../../public/images/background.webp'
// const background = new URL("../../../public/images/background.webp", import.meta.url)

const Login = () => {
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setLoading(true);
        Meteor.loginWithPassword(
            data.email,
            data.password,
            (error) => {
                if (error) {
                    console.error('Error on Login: ' + error.reason)
                    return
                }
                setTimeout(() => {
                    Accounts.onLogin(() => {
                        navigate('/home')
                        setLoading(false)
                    })
                }, 5000)
            }
        )
    }
    return (
        <>
            <CssBaseline>
                <Box
                    sx={{
                        backgroundImage: 'url(images/image1.jpeg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        // position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    {/* <img src="images/background.webp" /> */}
                    <Typography
                        variant="h4"
                        color="initial"
                        sx={{ mt: 15 }}
                    >
                        Inicio de Sesión
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
                            mt: 12,
                            gap: 4
                        }}
                    >
                        <TextFieldValidation
                            name='email'
                            label='Email'
                            control={control}
                            rules={
                                {
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'El formato es incorrecto'
                                    }
                                }
                            }
                            fullWidth
                        />
                        <TextFieldValidation
                            name='password'
                            label='password'
                            control={control}
                            rules={
                                {
                                    required: 'Este campo es obligatorio',
                                    minLength: {
                                        value: 6,
                                        message: 'La contraseña debe tener mínimo 6 digitos'
                                    }
                                }
                            }
                            type='password'
                            fullWidth
                        />
                        <LoadingButton
                            variant="contained"
                            color="primary"
                            type="submit"
                            loading={loading}
                        >
                            Iniciar Sesión
                        </LoadingButton>
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100vw',
                            gap: 13
                        }}
                    >
                        <Typography
                            variant="body1"
                        >
                            {`Si no tienes una cuenta. `}
                        </Typography>
                        <Link
                            to='/signup'
                            style={{ textDecoration: 'none' }}
                        >
                            Registrate aquí.
                        </Link>
                    </Box>

                </Box>
            </CssBaseline>
        </>
    )
}

export default Login
