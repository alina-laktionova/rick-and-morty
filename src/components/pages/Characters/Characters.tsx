import {Container, Grid} from "@mui/material";
import React, {useEffect} from "react";
import {Character} from "../../../models/Character";
import CharacterCard from "./CharacterCard";
import {useSelector} from "react-redux";
import {State, useAppDispatch} from "../../../store/store";
import {getCharacters} from "../../../store/asyncActions";

export default function Characters() {
    const characters: Character[] = useSelector((state: State) => state.characters)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    function getCharacterCards(characters: Character[]) {
        return characters.map((character: Character, index: number) =>
            <CharacterCard key={index}
                           name={character.name}
                           image={character.image}
                           gender={character.gender}
                           species={character.species}
                           status={character.status}/>
        )
    }

    return <>
        <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {characters.length === 0 &&
                <h3>Loading...</h3>
            }
            <Grid container spacing={3}>
                {characters.length > 0 &&
                    getCharacterCards(characters)
                }
            </Grid>
        </Container>
    </>
}