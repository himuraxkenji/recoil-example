import { memo } from "react";
import ListItem from "./ListItem";

const Playlist = ({images, id, description, name, external_urls}) => {
    return (
        <ListItem 
            imagesUrl={images.length ? images[0].url : ""}
            id={id}
            externalUrls={external_urls?.spotify}
            releaseDate=""
            name={description}
            artist={name}
        />
    )
}


export default memo(Playlist);

