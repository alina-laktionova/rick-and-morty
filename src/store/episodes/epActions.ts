import {Info} from '../../models/Info'
import {GET_EPISODES, GET_MULTIPLE_EPISODES} from '../actionTypes'
import {Episode} from '../../models/Episode'

export function getEpisodesAction(episodes: Episode[], info: Info) {
    return {
        type: GET_EPISODES,
        payload: {
            episodes: episodes,
            info: info,
        },
    }
}

export function getMultipleEpisodesAction(episodes: Episode[]) {
    return {
        type: GET_MULTIPLE_EPISODES,
        payload: {
            episodes: episodes,
        },
    }
}
