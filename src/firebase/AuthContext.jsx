import React, { createContext, useContext, useEffect, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return(
    <authContext.Provider value={{user}}>
        {children}
    </authContext.Provider>
  )



};
