import React, { createContext, useEffect, useState } from 'react'
import {app} from '../../config/firebase.init';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged , } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [loader, setLoader] = useState(true);
        const [error, setError] = useState('');

        const auth = getAuth(app);

        //sign  up new user
        const signUp = async (email, password) => {

        try{
            setLoader(true);
            return await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (error){
            setError(error.code);
            throw error;
        }
}


//login user

const login = async (email, password) => {

    try{
        setLoader(true);
        return await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error){
        setError(error.code);
        throw error;
    }
}

//logout user
const logout = async () => {
    try{
        return await SignOut(auth)
    }
    catch(error) {
        setError(error.code);
        throw error;
    }
}

//update user profile
const updateUser = async (name, photo) => {
    try{
        await updateProfile(auth.currentUser, {
            displayName:name , photoURL: photo
        })
        setUser(auth.currentUser)
    }catch (error)
    {
        setError(error.code);
        throw error;
    }
}

//using google login
const googleProvider = new GoogleAuthProvider();
const googlelogin = async () => {
try {
    setLoader(true)
    return await signInWithEmailAndPassword(auth, googleProvider)
} catch (error) {
        setError(error.code);
        throw error;
}
}

//observer for users
useEffect(()=>
{
    const unsubcribe = auth.onAuthStateChanged((user) => {
        setUser(user)

        if(user) {
            axios.post('http://localhost:5000/api/set-token', {email: user.email, name: user.displayName})
            .then((data) =>{
                if(data.data.token){
                    localStorage.setItem('token', data.data.token)
                    setLoader(false)
                }
            })
        }else
        {
        localStorage.removeItem('token')
        setLoader(false)
        }
    })
    return () => unsubcribe()
}, [])
const contextVale ={user , signUp, logout ,login,updateUser,googlelogin, error, setError}
  return (
    <AuthContext.Provider value= {contextVale}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider