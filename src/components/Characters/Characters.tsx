import {Container, Grid, Pagination, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {Character} from '../../models/Character'
import CharacterCard from './CharacterCard'
import {useSelector} from 'react-redux'
import {State, useTypedDispatch} from '../../store/store'
import {filterCharacters, getCharacters, goToPage} from '../../store/characters/charThunks'
import CharacterFilters from './CharacterFilters'
import Loader from '../library/Loader'

export default function Characters() {
    const {characters, info, currentPage} = useSelector((state: State) => state.characters)
    const dispatch = useTypedDispatch()

    const [filters, setFilters] = useState<string>('')
    const [badFilters, setBadFilters] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    useEffect(() => {
        dispatch(filterCharacters(filters, setBadFilters))
    }, [filters])

    function getCharacterCards(characters: Character[]) {
        return characters.map((character: Character, index: number) => (
            <CharacterCard key={index} character={character} />
        ))
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        dispatch(goToPage(value, filters))
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '30px',
            }}>
            {characters.length === 0 && <Loader />}

            <CharacterFilters setFilters={setFilters} />

            {badFilters && (
                <Typography variant="h5" textAlign="center">
                    There are no characters matching the filter
                </Typography>
            )}
            {!badFilters && characters.length > 0 && (
                <Grid container spacing={3} mb="30px">
                    {getCharacterCards(characters)}
                </Grid>
            )}
            {!badFilters && info.pages > 1 && (
                <Pagination count={info.pages} page={currentPage} onChange={handleChangePage} />
            )}
        </Container>
    )
}
