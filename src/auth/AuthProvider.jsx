import { createContext, useState, useEffect } from 'react';

import clientAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  const [isAuthenticaded, setIsAuthenticaded] = useState(false)

  const [auth, setAuth] = useState({})

  const validateToken = () => {
    const token = localStorage.getItem('token')
    if(!token) return
    setIsAuthenticaded(true)
  }

  const authUser = async () => {

    const token = localStorage.getItem('token')
    console.log(token);

    if(!token) {
      const data = '123445567'
      localStorage.setItem('token', data)
      setIsAuthenticaded(true)
    } else {
      setIsAuthenticaded(true)
    }

    /* const token = localStorage.getItem('token')
    
    if(!token) return

    if(token) {
      setIsAuthenticaded(true)
    } else {
      localStorage.setItem('token', data)
      setIsAuthenticaded(true)
    }
 */


    /* const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    } */
    
    /* try {
      const { data } = await clientAxios('/auth', config)
      const data = '123445567'
      localStorage.setItem('token', data)
      setAuth(data)
      setIsAuthenticaded(true)
    } catch (error) {
      console.log(error)
    } */
  }

  useEffect(() => {
    
    validateToken()

  }, [])
  

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticaded,
        setIsAuthenticaded,
        authUser
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
