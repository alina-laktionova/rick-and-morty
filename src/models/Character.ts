
export interface Character {
    id: number,
    name: string,
    status: CharStatus,
    species: string,
    type: string,
    gender: CharGender,
    origin: CharLocation,
    location: CharLocation,
    image: string,
    episode: string[],
    url: string
    created: string
}

export type CharStatus = 'Alive' | 'Dead' | 'unknown'
export type CharGender = 'Female' |'Male' | 'Genderless' | 'unknown'
export type CharLocation = {name: string, url: string}