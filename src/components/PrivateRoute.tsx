import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isAuthenticated as isAuthenticatedAtom } from '../recoil/auth/atoms'

const PrivateRoute = ({ children }: any) => {

    const [isAuthenticated] = useRecoilState(isAuthenticatedAtom)

    return isAuthenticated
        ? children
        : <Navigate to="/" />

}

export default PrivateRoute