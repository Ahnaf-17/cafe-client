import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=> {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div className="px-8">
            
            <button onClick={handleGoogleLogin} className="btn btn-neutral w-full">
                <FaGoogle className="mr-2"></FaGoogle>
                Google Login
            </button>
        </div>
    );
};

export default SocialLogin;