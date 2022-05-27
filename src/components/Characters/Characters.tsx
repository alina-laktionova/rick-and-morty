import {
    Autocomplete,
    AutocompleteRenderInputParams,
    Button,
    Container,
    Grid,
    Pagination,
    Stack,
    TextField,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Character} from "../../models/Character";
import CharacterCard from "./CharacterCard";
import {useSelector} from "react-redux";
import {State, useTypedDispatch} from "../../store/store";
import {getCharacters, goToPage} from "../../store/asyncActions";
import {GENDERS, SPECIES, STATUSES} from "../../config/constants";


export default function Characters() {
    const {characters, info, currentPage} = useSelector((state: State) => state.characters)
    const dispatch = useTypedDispatch()
    const [filters, setFilters] = useState<string>('')

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

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
        dispatch(goToPage(value))
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

        <Stack direction={{xs: 'column', md: 'row'}}
               spacing={1}
               justifyContent={'center'}
               alignItems={'center'}
               mb={'30px'}
               width={'85vw'}
               maxWidth={'1000px'}
               minWidth={'300px'}>
            <Autocomplete options={STATUSES} fullWidth
                          renderInput={(params: AutocompleteRenderInputParams) =>
                              <TextField {...params} label='Status'/>
                          }/>
            <Autocomplete options={GENDERS} fullWidth
                          renderInput={(params: AutocompleteRenderInputParams) =>
                              <TextField {...params} label='Gender'/>
                          }/>
            <Autocomplete options={SPECIES} fullWidth
                          renderInput={(params: AutocompleteRenderInputParams) =>
                              <TextField {...params} label='Species'/>
                          }/>
            <Button variant={"contained"}
                    disableElevation
                    sx={{
                        minWidth: '100px',
                        width: '200px',
                        padding: '8px',
                        height: {md: '55px'}
                    }}>
                Apply
            </Button>
        </Stack>

        {characters.length > 0 &&
            <Grid container spacing={3} mb={'30px'}>
                {getCharacterCards(characters)}
            </Grid>
        }
        <Pagination count={info.pages} page={currentPage} onChange={handleChangePage}/>
    </Container>
}