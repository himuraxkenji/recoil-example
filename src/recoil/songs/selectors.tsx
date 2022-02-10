import { selector } from "recoil";
import { album, artist, episode, playlist } from "./atoms";

export const filterType = selector({
    key: "filterType",
    get: ({ get }) => {
        const atoms = [get(album), get(artist), get(playlist), get(episode), "track"];
        const notNullAtoms = atoms.filter((atom) => !!atom);
        return notNullAtoms.length ? notNullAtoms.join(",") : null;
    },
    set: ({set}) => {
        set(album, undefined);
        set(artist, undefined);
        set(playlist, undefined);
        set(episode, undefined);
    }
});