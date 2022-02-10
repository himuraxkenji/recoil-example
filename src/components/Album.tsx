import { memo } from "react";
import ListItem from "./ListItem";

const Album = ({images, id, external_urls, release_date, name, artists }) => {
    return (
        <ListItem
            imagesUrl={images.length ? images[0].url : ""}
            id={id}
            externalUrls={external_urls?.spotify}
            releaseDate={release_date}
            name={name}
            artist={artists[0]?.name}
        />
    )
}


export default memo(Album);

