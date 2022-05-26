import {Character} from "../models/Character";
import {GET_CHARACTERS} from "./actionTypes";

export function getCharactersAction (characters: Character[]) {
    return {
        type: GET_CHARACTERS,
        payload: {
            characters: characters
        }
    }
}


