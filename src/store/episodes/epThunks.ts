import {AppDispatch} from "../store";
import axios, {AxiosResponse} from "axios";
import {GetResponse} from "../../models/GetResponse";
import {GET_EPISODES_URL} from "../../config/pathes";
import {getEpisodesAction, getMultipleEpisodesAction} from "./epActions";

export const getEpisodes = () => (dispatch: AppDispatch) => {
    axios.get<GetResponse>(GET_EPISODES_URL)
        .then((response: AxiosResponse) => {
            dispatch(getEpisodesAction(response.data.results, response.data.info))
        })
}

export const getAllEpisodes = () => (dispatch: AppDispatch) => {
    axios.get<GetResponse>(GET_EPISODES_URL)
        .then((response: AxiosResponse) => {
            axios.get<GetResponse>(
                `${GET_EPISODES_URL}/${Array.from(new Array(response.data.info.count).keys()).map(item => item).toString()}`)
                .then((response: AxiosResponse) => {
                    dispatch(getMultipleEpisodesAction(response.data))
                })
        })
}