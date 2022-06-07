import {ActionType, ADD_ITEM, CH_ITEM_STATUS, DELETE_ITEM, GET_LIST} from '../actionTypes'
import {WatchItem} from '../../models/WatchItem'

export type ListState = WatchItem[]

const init: ListState = []

export default function listReducer(state: ListState = init, action: ActionType) {
    const {type, payload} = action

    switch (type) {
        case GET_LIST:
            return payload.list
        case ADD_ITEM:
            return addItem(state, payload.id, payload.text)
        case CH_ITEM_STATUS:
            return changeItemStatus(state, payload.id, payload.isWatched)
        case DELETE_ITEM:
            return state.filter((item: WatchItem) => item.id !== payload.id)
        default:
            return state
    }
}

function addItem(list: ListState, id: string, text: string): ListState {
    if (!list.find((item: WatchItem) => item.id === id)) return [...list, {id: id, text: text, isWatched: false}]
    else return list
}

function changeItemStatus(list: ListState, id: string, newStatus: boolean): ListState {
    return list.map((item) => {
        if (item.id === id) return {...item, isWatched: newStatus}
        return item
    })
}
