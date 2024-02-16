import { createContext, useState, useEffect } from 'react';

import clientAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [isAuthenticaded, setIsAuthenticaded] = useState(true)

  const [auth, setAuth] = useState({})

  useEffect(() => {

    const authUser = async () => {
      const token = localStorage.getItem('token')
      
      if(!token) return

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      
      try {
        const { data } = await clientAxios('/auth', config)
        setAuth(data)
        setIsAuthenticaded(true)
      } catch (error) {
        console.log(error)
      }
    }

    authUser()

  }, [])
  

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticaded,
        setIsAuthenticaded
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider
}

export default AuthContext
