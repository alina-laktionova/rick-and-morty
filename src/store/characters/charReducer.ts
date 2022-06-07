import {ActionType, CLEAR_CHARACTERS, GET_CHARACTERS} from '../actionTypes'
import {Character} from '../../models/Character'
import {Info, infoInitialState} from '../../models/Info'

export type CharactersState = {
    characters: Character[]
    info: Info
    currentPage: number
}

const initialState: CharactersState = {
    characters: [],
    info: infoInitialState,
    currentPage: 0,
}

export default function charReducer(state: CharactersState = initialState, action: ActionType) {
    const {type, payload} = action

    switch (type) {
        case GET_CHARACTERS:
            return {...state, characters: payload.characters, info: payload.info, currentPage: payload.currentPage}
        case CLEAR_CHARACTERS:
            return initialState
        default:
            return state
    }
}
