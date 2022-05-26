import {GET_CHARACTERS} from "./actionTypes";
import {Character} from "../models/Character";

export type ActionType = {
    type: string;
    payload?: any;
}

const initialState: Character[] = []

export default function charactersReducer(state: Character[] = initialState, action: ActionType) {
    const {type, payload} = action

    switch (type) {
        case GET_CHARACTERS:
            return payload.characters
        default:
            return state
    }
}