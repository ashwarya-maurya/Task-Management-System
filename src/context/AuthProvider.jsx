import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    const localData = getLocalstorage()

    if (!localData.employees) {
      setLocalstorage()
      const { employees, admin } = getLocalstorage()
      setuserdata({ employees, admin })
    } else {
      setuserdata(localData)
    }
  }, [])

const updateEmployees = (updatedEmployees) => {
  setuserdata(prev => {
    const updatedData = {
      ...prev,
      employees: updatedEmployees
    }

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    return updatedData
  })
}


  return (
    <div>
        <AuthContext.Provider value={{ userdata, setuserdata }}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider