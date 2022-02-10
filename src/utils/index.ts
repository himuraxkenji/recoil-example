import apiCall from "../api";

const enviroment = import.meta.env;

const commonParams = {
    redirect_uri: enviroment.VITE_APP_SPOTIFY_CALLBACK_HOST,
    client_id: enviroment.VITE_APP_SPOTIFY_CLIENT_ID,
    client_secret: enviroment.VITE_APP_CLIENT_SECRET,
}

export const spotifyAuthCall = async (requiredParams: any) => {
    try {
        const params: any = {
            ...requiredParams,
            ...commonParams
        }

        const searchParams: string = Object.keys(params).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");

        const spotifyCall = await apiCall({
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            body: searchParams,
            headers: { "Content-type": "application/x-www-form-urlencoded" }
        })

        return await spotifyCall.json();
    } catch (error) {
        console.error(error);
    }
}


export const spotifySearchCall = async (paramsArray: any[], token: string) => {

    try {
        const url = new URL("https://api.spotify.com/v1/search");

        for (const item of paramsArray) {
            const key = Object.keys(item)[0];
            url.searchParams.append(key, item[key]);
        }

        const spotifyCall = await apiCall({
            method: "GET",
            url,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return await spotifyCall.json()

    } catch(error) {
        console.error(error);
    }
}