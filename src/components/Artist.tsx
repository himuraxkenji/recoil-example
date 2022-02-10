import { memo } from "react";
import ListItem from "./ListItem";

const Artist = ({images, id, external_urls, name}) => {
    return (
        <ListItem 
            imagesUrl={images.length ? images[0].url : ""}
            id={id}
            externalUrls={external_urls?.spotify}
            releaseDate=""
            name={name}
            artist={name}
        />
    )
}


export default memo(Artist);

