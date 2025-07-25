import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import axiosinstance from '../Components/Sharedpages/axiosinstance';

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

   

    return res.user;
  };

     const signin=(email,pass)=>{
         setLoad(true)
      return signInWithEmailAndPassword(auth,email,pass)
     }
       
     useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (cuser) => {
    if (cuser) {
      try {
        const res = await axiosinstance.get(`/users?email=${cuser.email}`);
        setUser(res.data);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setLoad(false);
  });
  return () => unsubscribe();
}, []);

  const logout=()=>{
   return signOut(auth)
  }
    const userinfo={
        user,
        signup,
        signin,
        load,
        setUser,
        gsignup,
        logout

    }
    
    return (
       <AuthContext.Provider value={userinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;