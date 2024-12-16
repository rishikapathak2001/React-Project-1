import React from 'react'
import Header from '../../assets/other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full'>

   <Header/>
  <div>
    <form>
        <h3>Task Title</h3>
        <input type="text" placeholder='Make a UI design' />
    </form>
  </div>

    </div>
  )
}

export default AdminDashboard