import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from "./charactersReducer";
import {Character} from "../models/Character";
import {useDispatch} from "react-redux";

export type State = {
    characters: Character[]
}

export const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
