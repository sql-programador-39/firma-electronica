import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isAuthenticaded: false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  
  const [isAuthenticaded, setIsAuthenticaded] = useState(true)

  return (
    <AuthContext.Provider 
    value={
      {isAuthenticaded}
    }
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
