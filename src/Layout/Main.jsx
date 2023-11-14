import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noNavFoot = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div>
            {noNavFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;