import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ showLogin, setShowLogin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);