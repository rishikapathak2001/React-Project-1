import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDasboard from './components/Dashboard/EmployeeDasboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utlis/localStorage'

const App = () => {


const [user, setuser] = useState(null)
  



  return (
    <>
    {!user ? <login />: ""}
    <Login />
    {/* <EmployeeDasboard /> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App 