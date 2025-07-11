import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null)
    const [load,setLoad]=useState(true)
    const gsignup=()=>{
       return signInWithPopup(auth,provider)
    }

    const signup = async (email, pass, name, photo) => {
    setLoad(true);
    const res = await createUserWithEmailAndPassword(auth, email, pass);

    // ✅ Update profile with displayName and photoURL
    await updateProfile(res.user, {
      displayName: name,
      photoURL: photo,
    });

    // Optional: update state (it will also update automatically in onAuthStateChanged)
    setUser({ ...res.user, displayName: name, photoURL: photo });

    return res.user;
  };

     const signin=(email,pass)=>{
         setLoad(true)
      return signInWithEmailAndPassword(auth,email,pass)
     }
       
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(cuser)=>{
            setUser(cuser)
            setLoad(false)
        })
        return ()=>unsubscribe()
     },[])

    const userinfo={
        user,
        signup,
        signin,
        load,
        setUser,
        gsignup

    }
    
    return (
       <AuthContext.Provider value={userinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;