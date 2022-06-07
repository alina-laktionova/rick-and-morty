import {ActionType, GET_EPISODES, GET_MULTIPLE_EPISODES} from '../actionTypes'
import {Info, infoInitialState} from '../../models/Info'
import {Episode} from '../../models/Episode'

export type EpisodesState = {
    episodes: Episode[]
    info: Info
}

const initialState: EpisodesState = {
    episodes: [],
    info: infoInitialState,
}

export default function epReducer(state: EpisodesState = initialState, action: ActionType) {
    const {type, payload} = action
    switch (type) {
        case GET_EPISODES:
            return {...state, episodes: payload.episodes, info: payload.info}
        case GET_MULTIPLE_EPISODES:
            return {...state, episodes: payload.episodes}
        default:
            return state
    }
}
