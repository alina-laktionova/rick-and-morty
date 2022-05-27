import {Box, Button, Container, List} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {State, useTypedDispatch} from "../../store/store";
import {getAllEpisodes} from "../../store/episodes/epThunks";
import {Episode} from "../../models/Episode";
import {ListState} from "../../store/watchList/listReducer";
import {addItemAction, getListFromStorage} from "../../store/watchList/listActions";
import {STORAGE_KEY} from "../../config/constants";
import WatchListItem from "./WatchListItem";
import {WatchItem} from "../../models/WatchItem";
import AddIcon from "@mui/icons-material/Add";
import SelectField from "../library/SelectField";


export default function MyWatchList() {

    const {episodes} = useSelector((state: State) => state.episodes)
    const list: ListState = useSelector((state: State) => state.list)
    const dispatch = useTypedDispatch()

    const [episodeOptions, setEpisodeOptions] = useState<string[]>([])
    const [value, setValue] = useState<string | null>(null);


    useEffect(() => {
        dispatch(getAllEpisodes())

        const listString: string | null = localStorage.getItem(STORAGE_KEY)
        if (listString) {
            const list: ListState = JSON.parse(listString)
            dispatch(getListFromStorage(list))
        }

    }, [])

    useEffect(() => {
        setEpisodeOptions(getNames(episodes))
    }, [episodes])


    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
        setEpisodeOptions(getNames(episodes))
    }, [list]);


    function addEpisodeToList() {
        if (value) {
            dispatch(addItemAction(value.substring(0, 6), value))
            setValue(null)
        }
    }

    function getNames(episodes: Episode[]): string[] {
        return episodes.reduce((res: string[], episode: Episode) => {
            if (!list.find(item => item.id === episode.episode)) {
                res.push(episode.episode + ' ' + episode.name)
            }
            return res
        }, [])
    }


    return <Container maxWidth="xl"
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

            <SelectField options={episodeOptions} label={'Episode'} value={value} setValue={setValue}/>

            <Button disableElevation variant={"contained"} onClick={addEpisodeToList}>
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
}