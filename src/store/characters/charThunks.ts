import {AppDispatch} from '../store'
import axios, {AxiosResponse} from 'axios'
import {GetResponse} from '../../models/GetResponse'
import {GET_CHARACTERS_URL} from '../../config/pathes'
import {clearCharactersAction, getCharactersAction} from './charActions'

export const getCharacters = () => (dispatch: AppDispatch) => {
    axios.get<GetResponse>(GET_CHARACTERS_URL).then((response: AxiosResponse) => {
        dispatch(getCharactersAction(response.data.results, response.data.info, 1))
    })
}

export const goToPage = (page: number, filters: string) => (dispatch: AppDispatch) => {
    dispatch(clearCharactersAction())
    axios.get<GetResponse>(`${GET_CHARACTERS_URL}?page=${page}&${filters}`).then((response: AxiosResponse) => {
        dispatch(getCharactersAction(response.data.results, response.data.info, page))
    })
}

export const filterCharacters =
    (filters: string, setBadRequest: (status: boolean) => void) => (dispatch: AppDispatch) => {
        axios
            .get<GetResponse>(`${GET_CHARACTERS_URL}?${filters}`)
            .then((response: AxiosResponse) => {
                setBadRequest(false)
                dispatch(getCharactersAction(response.data.results, response.data.info, 1))
            })
            .catch((error) => {
                setBadRequest(true)
            })
    }
