import {Autocomplete, Box, Button, Container, List, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {State, useTypedDispatch} from "../../store/store";
import {getAllEpisodes} from "../../store/asyncActions";
import {Episode} from "../../models/Episode";
import {ListState} from "../../store/watchList/listReducer";
import {addItemAction, getListFromStorage} from "../../store/watchList/listActions";
import {STORAGE_KEY} from "../../config/constants";
import WatchListItem from "./WatchListItem";
import {WatchItem} from "../../models/WatchItem";
import AddIcon from "@mui/icons-material/Add";


export default function MyWatchList() {

    const {episodes} = useSelector((state: State) => state.episodes)
    const list: ListState = useSelector((state: State) => state.list)
    const dispatch = useTypedDispatch()

    const [inputValue, setInputValue] = useState<string>('');

    function addEpisodeToList() {
        if (inputValue) {
            dispatch(addItemAction(inputValue.substring(0, 6), inputValue))
        }
        setInputValue('')
    }

    useEffect(() => {
        dispatch(getAllEpisodes())

        const listString: string | null = localStorage.getItem(STORAGE_KEY)
        if (listString) {
            const list: ListState = JSON.parse(listString)
            dispatch(getListFromStorage(list))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
    }, [list]);


    function getNames(episodes: Episode[]): string[] {
        return episodes.reduce((res: string[], episode: Episode) => {
            if (!list.find(item => item.id === episode.episode)) {
                res.push(episode.episode + ' ' + episode.name)
            }
            return res
        }, [])
    }

    return <>
        <Container maxWidth="xl"
                   sx={{
                       paddingY: '30px',
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                   }}>
            <Box display={"flex"}
                 maxWidth={'600px'}
                 width={'100%'}
                 mb={'10px'}
                 gap={'1vw'}>
                <Autocomplete
                    disableClearable
                    value={inputValue}
                    inputValue={inputValue}
                    isOptionEqualToValue={() => true}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    options={getNames(episodes)}
                    sx={{width: '100%'}}
                    renderInput={(params) => <TextField {...params} label='Episode'/>}
                />
                <Button variant={"contained"} onClick={addEpisodeToList}>
                    <AddIcon/>
                </Button>
            </Box>

            <List sx={{
                maxWidth: '700px',
                width: '100%',
                minWidth: '300px',
            }}>
                {list.map((item: WatchItem, index: number) =>
                    <WatchListItem item={item} key={index}/>
                )}
            </List>

        </Container>
    </>
}