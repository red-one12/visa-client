import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }



  const authInfo = {
    user, loading, createNewUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

