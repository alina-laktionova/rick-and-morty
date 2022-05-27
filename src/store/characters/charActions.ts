import {Character} from "../../models/Character";
import {CLEAR_CHARACTERS, GET_CHARACTERS} from "../actionTypes";
import {Info} from "../../models/Info";

export function getCharactersAction (characters: Character[], info: Info, currentPage: number) {
    return {
        type: GET_CHARACTERS,
        payload: {
            characters: characters,
            info: info,
            currentPage: currentPage
        }
    }
}

export function clearCharactersAction() {
    return {
        type: CLEAR_CHARACTERS,
    }
}


