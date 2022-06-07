import {Button, Stack} from '@mui/material'
import {GENDERS, SPECIES, STATUSES} from '../../config/constants'
import React, {useState} from 'react'
import SelectField from '../library/SelectField'

type Props = {
    setFilters: (filters: string) => void
}

export default function CharacterFilters(props: Props) {
    const {setFilters} = props

    const [status, setStatus] = useState<string | null>(null)
    const [gender, setGender] = useState<string | null>(null)
    const [species, setSpecies] = useState<string | null>(null)

    function applyFilters(status: string | null, gender: string | null, species: string | null) {
        let res = ''
        if (typeof status === 'string') {
            res = res.concat('status=', status, '&')
        }
        if (typeof gender === 'string') {
            res = res.concat('gender=', gender, '&')
        }
        if (typeof species === 'string') {
            res = res.concat('species=', species, '&')
        }
        setFilters(res)
    }

    return (
        <Stack
            direction={{xs: 'column', md: 'row'}}
            spacing={1}
            justifyContent="center"
            alignItems="center"
            mb="30px"
            width="85vw"
            maxWidth="1000px"
            minWidth="300px">
            <SelectField options={STATUSES} label="Status" value={status} setValue={setStatus} />
            <SelectField options={GENDERS} label="Gender" value={gender} setValue={setGender} />
            <SelectField options={SPECIES} label="Species" value={species} setValue={setSpecies} />

            <Button
                variant="contained"
                disableElevation
                onClick={() => applyFilters(status, gender, species)}
                sx={{
                    minWidth: '100px',
                    width: '200px',
                    padding: '8px',
                    height: {md: '55px'},
                }}>
                Apply
            </Button>
        </Stack>
    )
}
