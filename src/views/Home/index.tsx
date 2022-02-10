import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import seekerImage from '../../assets/images/seeker.png';
import Album from '../../components/Album';
import Artist from '../../components/Artist';
import Episode from '../../components/Episode';
import HomeFilters from '../../components/HomeFilters';
import Playlist from '../../components/Playlist';
import Track from '../../components/Track';
import { spotifyTokenResponse } from '../../recoil/auth/atoms';
import { spotifyResult } from '../../recoil/songs/atoms';
import { filterType as filterTypeSelector } from '../../recoil/songs/selectors';
import { spotifySearchCall } from '../../utils';

import "./style.css";

const Home = () => {

    const [searchText, setSearchText] = useState("");
    const [tokenResponse] = useRecoilState(spotifyTokenResponse);
    const [searchResults, setSearchResults] = useRecoilState(spotifyResult)
    const [filterType] = useRecoilState(filterTypeSelector);
    const resetFilter = useResetRecoilState(filterTypeSelector)


    const handleSearch = async () => {
        let type = filterType ?? "track"

        const paramsArray = [{
            q: searchText
        }, {
            type
        }, {
            offset: 50
        }]
        const response = await spotifySearchCall(paramsArray, tokenResponse.access_token)
        setSearchResults(response)
    }

    const handleResetFiltersClick = () => {
        resetFilter();
        setSearchResults([]);
        setSearchText("");
    }

    return (
        <div className="home">
            <div
                style={{ backgroundImage: `url(${seekerImage})` }}
                className="home-cover-container" />

            <h2 className="home-title">Busca tu canción favorita</h2>

            <div className="home-searchbox">
                <input type="text" className="home-searchbox-input"
                    value={searchText}
                    onChange={({ target: { value } }: any) => setSearchText(value)}
                />
                <button className="home-searchbox-button" onClick={handleSearch}>Buscar</button>
            </div>
            <HomeFilters />
            <button onClick={handleResetFiltersClick} className="home-clean-filters-button">Limpiar filtros</button>
            {searchResults?.tracks?.items && (
                <div className="home-tracks-container">
                    <p className="home-tracks-title">Canciones</p>
                    <div className="home-tracks-container-items">
                        {searchResults?.tracks?.items?.map((item, index) => <Track key={index} {...item} />)}
                    </div>
                </div>
            )}
            {searchResults?.albums?.items && (
                <div className="home-tracks-container">
                    <p className="home-tracks-title">Album</p>
                    <div className="home-tracks-container-items">
                        {searchResults?.albums?.items?.map((item, index) => <Album key={index} {...item} />)}
                    </div>
                </div>
            )}

            {searchResults?.artists?.items && (
                <div className="home-tracks-container">
                    <p className="home-tracks-title">Artista</p>
                    <div className="home-tracks-container-items">
                        {searchResults?.artists?.items?.map((item, index) => <Artist key={index} {...item} />)}
                    </div>
                </div>
            )}

            {searchResults?.episodes?.items && (
                <div className="home-tracks-container">
                    <p className="home-tracks-title">Episodios</p>
                    <div className="home-tracks-container-items">
                        {searchResults?.episodes?.items?.map((item, index) => <Episode key={index} {...item} />)}
                    </div>
                </div>
            )}
            {searchResults?.playlists?.items && (
                <div className="home-tracks-container">
                    <p className="home-tracks-title">Playlists</p>
                    <div className="home-tracks-container-items">
                        {searchResults?.playlists?.items?.map((item, index) => <Playlist key={index} {...item} />)}
                    </div>
                </div>
            )}
        </div>
    )

}

export default Home;