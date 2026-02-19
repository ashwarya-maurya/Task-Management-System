import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashbord from './components/Dashbord/EmployeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
import {AuthContext} from './context/AuthProvider'
const App = () => {

  const {userdata} = useContext(AuthContext)
  const [loggedEmail, setloggedEmail] = useState(null)
  const [user, setuser] = useState(null)

useEffect(() => {
    const loggedinUser = localStorage.getItem('loggedinUser')

    if (loggedinUser) {
      const parsedUser = JSON.parse(loggedinUser)
      setuser(parsedUser.role)
      if(parsedUser.role == 'admin'){
        setloggedEmail(parsedUser.email)
      }else if (parsedUser.role == 'employee') {
        setloggedEmail(parsedUser.email)
      }
    }
  }, [])



const LoginHandler = (email, password) => {

  if (!userdata) return

  const adminUser = userdata.admin.find((a) => email == a.email && password == a.password)

  if (adminUser) {
    setuser('admin')
    setloggedEmail(adminUser.email)
    localStorage.setItem('loggedinUser',JSON.stringify({ role: 'admin',email:adminUser.email}))
    return 
  }
 
  const employee = userdata.employees.find((e) => email == e.email && password == e.password)

  if (employee) {
    setuser('employee')
    setloggedEmail(employee.email)
    localStorage.setItem('loggedinUser',JSON.stringify({role: 'employee',email: employee.email}))
    return
  }

  else{
    alert("Invalid Credentials")
  }
}


const employeeData =
    user == 'employee' && userdata ? userdata.employees.find((emp) => emp.email == loggedEmail) : null

const adminData =
    user == 'admin' && userdata ? userdata.admin.find((admin) => admin.email == loggedEmail) : null

  return (
  <>
    {!user && (
      <Login LoginHandler={LoginHandler} />
    )}

    {user == 'admin' && adminData && (
      <AdminDashbord
        changeuser={setuser}
        data={adminData}
      />
    )}

    {user == 'employee' && employeeData && (
      <EmployeDashbord
        changeuser={setuser}
        data={employeeData}
      />
    )}
  </>
)
}

export default App
