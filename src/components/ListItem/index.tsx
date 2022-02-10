import { memo } from "react";
import { artist } from "../../recoil/songs/atoms";
import "./style.css";

const ListItem = ({imagesUrl, id, externalUrls, releaseDate, name, artist})=> {

    const handleListItemClick = () => {
        window.open(externalUrls, "_blank");
    }

    return ( 
        <div className="list-item" onClick={handleListItemClick}>
            <img src={imagesUrl} alt={id} />
            <p className="list-item-title">
                {name}
            </p>
            <p className="list-item-artist">
                {artist}
            </p>
            <p className="list-item-release-date">{releaseDate}</p>
        </div>
    )
}

export default memo(ListItem);