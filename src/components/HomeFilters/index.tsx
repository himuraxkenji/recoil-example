import { useRecoilState} from "recoil";
import {
    album as albumAtom,
    artist as artistAtom,
    playlist as playlistAtom,
    episode as episodeAtom
} from "../../recoil/songs/atoms";
import "./style.css";

const HomeFilters = () => {

    const [album, setAlbum] = useRecoilState(albumAtom)
    const [artist, setArtist] = useRecoilState(artistAtom)
    const [playlist, setPlaylist] = useRecoilState(playlistAtom)
    const [episode, setEpisode] = useRecoilState(episodeAtom)

    return (
        <div className="home-filters">
           <label>
               Album
               <input type="checkbox" name="album" checked={!!album} onChange={({target}: any) => setAlbum(target.checked ? "album" : null)}/>
            </label> 
           <label>
               Artista
               <input type="checkbox" name="artista" checked={!!artist} onChange={({target}: any) => setArtist(target.checked ? "artist" : null)} />
            </label> 
           <label>
               Playlist
               <input type="checkbox" name="playlist" checked={!!playlist} onChange={({target}: any) => setPlaylist(target.checked ? "playlist" : null)}/>
            </label> 
           <label>
               Episodio
               <input type="checkbox" name="episodio" checked={!!episode} onChange={({target}: any) => setEpisode(target.checked ? "episode" : null)}/>
            </label> 
        </div>
    )
}

export default HomeFilters;