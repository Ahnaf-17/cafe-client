/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
    // return <Navigate state={location.pathname} to='/login'></Navigate>
    return <Navigate state={{from: location}} replace to='/'></Navigate>
}


export default AdminRoute;