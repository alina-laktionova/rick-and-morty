export type ActionType = {
    type: string
    payload?: any
}

//characters
export const GET_CHARACTERS = 'GET_CHARACTERS'
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS'

//episodes
export const GET_EPISODES = 'GET_EPISODES'
export const GET_MULTIPLE_EPISODES = 'GET_MULTIPLE_EPISODES'

//watchList
export const GET_LIST = 'GET_LIST'
export const ADD_ITEM = 'ADD_ITEM'
export const CH_ITEM_STATUS = 'CH_ITEM_STATUS'
export const DELETE_ITEM = 'DELETE_ITEM'
