import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
      return () => unsubscribe();
    })
  })
  const authInfo = {
    user,
    login,
    logout,
    isLoading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}
export default AuthProvider

