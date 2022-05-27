import {AppDispatch} from "../store";
import axios, {AxiosResponse} from "axios";
import {GetResponse} from "../../models/GetResponse";
import {GET_CHARACTERS_URL} from "../../config/pathes";
import {getCharactersAction} from "./charActions";

export const getCharacters = () => (dispatch: AppDispatch) => {
    axios.get<GetResponse>(GET_CHARACTERS_URL)
        .then((response: AxiosResponse) => {
            dispatch(getCharactersAction(response.data.results, response.data.info, 1))
        })
}

export const goToPage = (page: number, filters: string) => (dispatch: AppDispatch) => {
    console.log(`${GET_CHARACTERS_URL}?page=${page}&${filters}`)
    axios.get<GetResponse>(`${GET_CHARACTERS_URL}?page=${page}&${filters}`)
        .then((response: AxiosResponse) => {
            dispatch(getCharactersAction(response.data.results, response.data.info, page))
        })
}

export const filterCharacters = (filters: string) => (dispatch: AppDispatch) => {
    console.log(`${GET_CHARACTERS_URL}?${filters}`)
    axios.get<GetResponse>(`${GET_CHARACTERS_URL}?${filters}`)
        .then((response: AxiosResponse) => {
            dispatch(getCharactersAction(response.data.results, response.data.info, 1))
        })
}