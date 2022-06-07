export interface Info {
    count: number
    next: string | null
    pages: number
    prev: string | null
}

export const infoInitialState = {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
}
