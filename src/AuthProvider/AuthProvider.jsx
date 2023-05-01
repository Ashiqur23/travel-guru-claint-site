import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () =>{
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUer) => {
      setUser(currentUer);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    signIn,
    logIn,
    logout,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
