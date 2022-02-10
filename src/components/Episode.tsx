import { memo } from "react";
import ListItem from "./ListItem";

const Episode = ({images, id, external_urls, release_date, name, description}) => {
    return (
        <ListItem 
            imagesUrl={images.length ? images[0].url : ""}
            id={id}
            externalUrls={external_urls?.spotify}
            releaseDate={release_date}
            name={description}
            artist={name}
        />
    )
}


export default memo(Episode);

