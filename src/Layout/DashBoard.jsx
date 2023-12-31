/* eslint-disable no-unused-vars */
import { FaAd, FaBook, FaCalendar, FaComment, FaHome, FaList, FaMobileAlt, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                    <li>
                        <NavLink to='/dashboard/adminHome'>
                        <FaHome></FaHome>
                        Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                        <FaUtensils></FaUtensils>
                        Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <FaList></FaList>
                        Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBookings'>
                        <FaBook></FaBook>
                        Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'>
                        <FaUsers></FaUsers>
                        All Users
                        </NavLink>
                    </li>
                        </>
                        :
                        <>
                                            <li>
                        <NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/history'>
                        <FaCalendar></FaCalendar>
                        History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                        <FaComment></FaComment>
                        Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory'>
                        <FaList></FaList>
                        Payment real History
                        </NavLink>
                    </li>
                        </>
                    }



                    {/* common links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                        <FaHome></FaHome>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                        Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/contact'>
                        <FaMobileAlt></FaMobileAlt>
                        Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;