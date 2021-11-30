import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const singIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const singOut = (cb) => {
    setUser("");
    cb();
  };
  return (
    <AuthContext.Provider value={{ user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
