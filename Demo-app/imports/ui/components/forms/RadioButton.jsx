import React from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio, Typography
} from '@mui/material'

const RadioButton = ({ value, setValue, object, questionNumber, label }) => {
    const points = [0, 1, 2, 3, 4, 5]

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={0}
                name="radio-buttons-group"
                row
                value={value}
                onChange={(e) => setValue({ ...object, [questionNumber]: e.target.value })}
            >
                {
                    points.map((point, index) => (
                        <FormControlLabel
                            key={index}
                            value={point}
                            control={<Radio />}
                            label={`${point}`}
                            labelPlacement="bottom"
                        />
                    ))
                }
            </RadioGroup>
        </FormControl >
    )
}

export default RadioButton
