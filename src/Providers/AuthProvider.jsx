/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
    
        })

    }
   

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("user in auth", currentUser);
            setUser(currentUser)
            if(currentUser){
                // get token and store client 
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                // remove token(if token stored in the client side: local storage, caching,in memory)
                localStorage.removeItem('access-token')
            }
            setLoading(false) 
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;