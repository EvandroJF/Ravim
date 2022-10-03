import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { api } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }
    setLoading(false)
  }, [])

  const login = async ({ email, name, id }) => {
    const loggedUser = {
      id,
      name,
      email,
    }

    console.log(loggedUser)

    localStorage.setItem('user', JSON.stringify(loggedUser))
    // const user = localStorage.getItem('user')

    const token = localStorage.getItem('user')

    if (token) {
      setUser(loggedUser);
      navigate('/', { replace: true })
    }
    setLoading(false)
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}