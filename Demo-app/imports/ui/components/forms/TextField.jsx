import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller } from "react-hook-form"

const TextFieldComp = ({ name, label, ...props }) => {
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            {...props}
        />
    )
}

const TextFieldValidation = ({ name, label, control, rules, ...props }) => {
    return (
        <Controller
            defaultValue=''
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { name, onBlur, onChange, value },
                formState: { errors }
            }) => (
                <TextFieldComp
                    required
                    name={name}
                    label={label}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors[name]}
                    helperText={errors[name]?.message}
                    {...props}
                />
            )}
        />
    )
}

export { TextFieldComp, TextFieldValidation } 