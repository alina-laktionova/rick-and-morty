import {configureStore} from '@reduxjs/toolkit'
import charReducer, {CharactersState} from './characters/charReducer'
import {useDispatch} from 'react-redux'
import epReducer, {EpisodesState} from './episodes/epReducer'
import listReducer, {ListState} from './watchList/listReducer'

export type State = {
    characters: CharactersState
    episodes: EpisodesState
    list: ListState
}

export const store = configureStore({
    reducer: {
        characters: charReducer,
        episodes: epReducer,
        list: listReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export const useTypedDispatch = () => useDispatch<AppDispatch>()
