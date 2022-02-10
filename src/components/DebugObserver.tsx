import { useRecoilTransactionObserver_UNSTABLE } from "recoil";

export const keysAbleToSave = ["spotifyRefreshToken", "spotifyTokenResponse", "isAuthenticated"];

const DebugObserver = () => {

    useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
        const atoms = snapshot.getNodes_UNSTABLE({isModified: true});

        for( const modifiedAtom of atoms) {
            const atom = snapshot.getLoadable(modifiedAtom)
            if(atom.state === 'hasValue' && keysAbleToSave.indexOf(modifiedAtom.key) !== -1) {
                localStorage.setItem(modifiedAtom.key, JSON.stringify({value: atom.contents}));
                console.log(modifiedAtom)
                console.log(`${modifiedAtom.key} has been modified`)
            }
        }
    })

    return null;
}

export default DebugObserver;