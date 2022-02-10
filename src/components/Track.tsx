import { memo } from "react";
import ListItem from "./ListItem";

const Track = memo(({album, id, external_urls, name, artists}) => {
    return (
        <ListItem 
            imagesUrl={album?.images.length ? album.images[0].url : ""}
            id={id}
            externalUrls={external_urls?.spotify}
            releaseDate={album?.release_date}
            name={name}
            artist={artists[0]?.name}
        />
    )
})

export default Track;