import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = (
  {children}
) => {

  const { setUser, isLoading, setIsLoading, error, setError } = useContext(UserDataContext)

  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  useEffect(() => {
    if(!token){
      navigate("/login")
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      if(res.status === 200){
        setUser(res.data)
        setIsLoading(false)
      }
    }).catch((err) => {
      console.log(err);
      setError(err.response.data.message)
      setIsLoading(false)
      localStorage.removeItem("token")
      navigate("/login")
    })
  }, [token])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper