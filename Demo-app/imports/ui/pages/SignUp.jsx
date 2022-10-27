import React from 'react';
import { Meteor } from 'meteor/meteor'
import TextField from '@mui/material/TextField';
import { CssBaseline, Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { TextFieldValidation } from '../components/TextField';
import { useNavigate } from 'react-router-dom'

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
                        justifyContent: 'center',
                        width: '100vw',
                        height: '100vh',
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
                            mt: 4,
                            display: flex,
                            flexDirection: column,

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
                        />

                        <Button variant="contained" color="primary" type="submit">
                            Registrarse
                        </Button>
                    </Box>

                </Box>
            </CssBaseline>
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
            />
        </>
    )
}

export default SignUp