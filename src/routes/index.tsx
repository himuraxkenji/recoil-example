import  {Route, Routes, BrowserRouter} from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../views/Home";
import Login from "../views/Login";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;