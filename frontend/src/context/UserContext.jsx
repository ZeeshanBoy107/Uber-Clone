import React, { createContext, useState } from 'react'
  
export const UserDataContext = createContext()

const UserContext = ({children}) => {

  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  })

  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const updateUser = (userData) => {
    setUser(userData);
  };

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateUser
  }


  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext