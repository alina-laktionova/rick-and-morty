import {AppDispatch} from "./store";
import axios, {AxiosResponse} from "axios";
import {GetCharactersResponse} from "../models/GetCharactersResponse";
import {getCharactersAction} from './charactersActions'

export const getCharacters = () => (dispatch: AppDispatch) => {
    axios.get<GetCharactersResponse>('https://rickandmortyapi.com/api/character')
        .then((response: AxiosResponse) => {
            dispatch(getCharactersAction(response.data.results))
        })
}
