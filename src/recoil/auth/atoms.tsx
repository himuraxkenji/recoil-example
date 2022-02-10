import {atom} from "recoil";


export const isAuthenticated = atom ({
    key: "isAuthenticated",
    default: false
})

export const spotifyRefreshToken = atom({
    key: "spotifyRefreshToken",
    default: undefined
})

export const spotifyTokenResponse = atom({
    key: "spotifyTokenResponse",
    default: undefined
})