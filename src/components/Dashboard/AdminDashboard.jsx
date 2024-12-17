import React from 'react'
import Header from '../../assets/other/Header'
import CreateTask from '../../assets/other/CreateTask'
import AllTask from '../../assets/other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>

   <Header/>
  <CreateTask/>
  <AllTask/>

    </div>
  )
}

export default AdminDashboard