import {Character} from "./Character";
import {Info} from "./Info";

export type GetCharactersResponse = {
    info: Info,
    results: Character[],
}