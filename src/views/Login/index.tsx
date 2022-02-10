import "./style.css"
import homeImage from "../../assets/images/home.png"
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useLocation, Location, useNavigate } from "react-router-dom";

import {
    isAuthenticated as isAuthenticatedAtom, spotifyRefreshToken as spotifyRefreshTokenAtom,
    spotifyTokenResponse as spotifyTokenResponseAtom
} from "../../recoil/auth/atoms";
import { spotifyAuthCall } from "../../utils";


const Login: React.FC = () => {

    const location: Location = useLocation();
    const enviroment = import.meta.env;
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
    const [spotifyRefreshToken, setSpotifyRefreshToken] = useRecoilState(spotifyRefreshTokenAtom);
    const [spotifyTokenResponse, setSpotifyTokenResponse] = useRecoilState(spotifyTokenResponseAtom);

    console.log(spotifyTokenResponse)
    console.log(spotifyRefreshToken)
    const authenticateUser = useCallback(async (spotifyCode: string | null) => {
        try {
            let response;

            // Si el refresh token existe, entonces haz una llamada a refresh token, de lo contrario solicita un token nuevo
            if (spotifyRefreshToken) {
                response = await spotifyAuthCall({ refresh_token: spotifyRefreshToken, grant_type: "resfresh_token" });
            } else {
                response = await spotifyAuthCall({ code: spotifyCode, grant_type: "authorization_code" })
            }

            if (response.access_token) {
                setSpotifyRefreshToken(response?.refresh_token);
                setSpotifyTokenResponse(response);
                setIsAuthenticated(true);
                navigate("/home");
            } else {
                throw new Error("Usuario no fue logeado")
            }

        } catch (error) {
            console.error(error)
            alert("Usuario no fue logeado")
            setSpotifyTokenResponse(null);
            setSpotifyRefreshToken(null);
            setIsAuthenticated(false);
        }

        // TODO: Redirect to search page
    }, [setSpotifyRefreshToken, setSpotifyTokenResponse, setIsAuthenticated, spotifyRefreshToken]);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const spotifyCode = urlParams.get("code");
        if (spotifyCode || isAuthenticated) {
            authenticateUser(spotifyCode);
        }
    }, [location.search]);

    const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${enviroment.VITE_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${enviroment.VITE_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`

    const handleLoginClick = () => {
        window.location.replace(spotifyUrl)
    };

    return (
        <div className="home-container">
            <div className="home-left-child">
                <h3>Bienvenido de nuevo</h3>
                <h6>identificate para encontrar tu música favorita</h6>
                <button onClick={handleLoginClick}>
                    Iniciar session
                </button>

            </div>
            <div className="home-right-child" style={{ backgroundImage: `url(${homeImage})` }} />
        </div>
    )
}

export default Login;