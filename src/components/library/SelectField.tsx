import React, {SyntheticEvent} from "react";
import {Autocomplete, AutocompleteRenderInputParams, TextField} from "@mui/material";

type Props = {
    options: string[],
    label: string,
    value: string | null,
    setValue: (value: string | null) => void
}

export default function SelectField(props: Props) {
    const {options, label, value, setValue} = props

    return <Autocomplete options={options} fullWidth
                         value={value}
                         onChange={(event: SyntheticEvent, newValue: string | null) => {
                             setValue(newValue);
                         }}
                         renderInput={(params: AutocompleteRenderInputParams) =>
                             <TextField {...params} label={label}/>
                         }/>
}