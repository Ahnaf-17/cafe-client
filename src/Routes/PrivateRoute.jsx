/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    // return <Navigate state={location.pathname} to='/login'></Navigate>
    return <Navigate state={{from: location}} replace to='/login'></Navigate>
}

export default PrivateRoute;