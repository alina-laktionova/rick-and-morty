import {ADD_ITEM, CH_ITEM_STATUS, DELETE_ITEM, GET_LIST} from "../actionTypes";
import {WatchItem} from "../../models/WatchItem";

export function getListFromStorage(list: WatchItem[]) {
    return {
        type: GET_LIST,
        payload: {
            list: list
        }
    }
}

export function addItemAction(id: string, text: string) {
    return {
        type: ADD_ITEM,
        payload: {
            id: id,
            text: text,
        }
    }
}

export function changeItemStatusAction(id: string, isWatched: boolean) {
    return {
        type: CH_ITEM_STATUS,
        payload: {
            id: id,
            isWatched: isWatched
        }
    }
}

export function deleteItemAction(id: string) {
    return {
        type: DELETE_ITEM,
        payload: {
            id: id,
        }
    }
}