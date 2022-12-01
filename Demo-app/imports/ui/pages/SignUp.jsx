import React from 'react';
import { Meteor } from 'meteor/meteor'
import { CssBaseline, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { TextFieldValidation } from '../components/forms/TextField';
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();
    const onSubmit = (dataNewUser) => {
        Meteor.call(
            'user.insert',
            dataNewUser,
            (error) => {
                if (error) {
                    console.log('Register ERROR:', error.reason)
                    return
                }
                navigate('/')
            }
        )
    }
    return (
        <>
            <CssBaseline>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100vw',
                        height: 'auto',
                        mt: 15
                    }}
                >
                    <Typography
                        variant="h4"
                        color="initial"
                    >
                        Registrate!
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{
                            mt: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
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

                        <Button variant="contained" color="primary" type="submit">
                            Registrarse
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100vw',
                            justifyContent: 'center',
                            mt: 2,
                            gap: 20
                        }}
                    >
                        <Typography
                            variant="body1"
                        >
                            {`Si tienes una cuenta `}
                        </Typography>
                        <Link
                            to='/'
                            style={{ textDecoration: 'NONE' }}
                        >
                            Inicia sesión
                        </Link>
                    </Box>
                    <div
                        style={{
                            backgroundImage: 'url(images/background.webp)',
                            backgroundRepeat: 'no-repeat',
                            width: '500px',
                            height: '500px'
                        }}
                    ></div>
                </Box>
            </CssBaseline>
        </>
    )
}

export default SignUp
