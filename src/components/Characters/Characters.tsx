import {
    Container,
    Grid,
    Pagination,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Character} from "../../models/Character";
import CharacterCard from "./CharacterCard";
import {useSelector} from "react-redux";
import {State, useTypedDispatch} from "../../store/store";
import {filterCharacters, getCharacters, goToPage} from "../../store/characters/charThunks";
import CharacterFilters from "./CharacterFilters";


export default function Characters() {
    const {characters, info, currentPage} = useSelector((state: State) => state.characters)
    const dispatch = useTypedDispatch()

    const [filters, setFilters] = useState<string>('')

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    useEffect(() => {
        dispatch(filterCharacters(filters))
    }, [filters])

    function getCharacterCards(characters: Character[]) {
        return characters.map((character: Character, index: number) =>
            <CharacterCard key={index} character={character}/>
        )
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        dispatch(goToPage(value, filters))
    };


    return <Container maxWidth="xl"
                      sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          paddingY: '30px'
                      }}>
        {characters.length === 0 &&
            <h3>Loading...</h3>
        }

        <CharacterFilters setFilters={setFilters}/>

        {characters.length > 0 &&
            <Grid container spacing={3} mb={'30px'}>
                {getCharacterCards(characters)}
            </Grid>
        }
        <Pagination count={info.pages} page={currentPage} onChange={handleChangePage}/>
    </Container>
}