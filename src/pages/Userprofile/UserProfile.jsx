import React from 'react'
import DashboardLayout from './DashboardLayout'
import { Outlet } from 'react-router-dom'

export const UserProfile = () => {
  return (
    <div className='w-[1400px] h-[1024px]   items-center flex flex-col bg-[#F9F9F9] '>
<div   className="w-full h-30 flex   "></div>  

<div  dir='rtl' className="mt-[20px] w-[1250px] flex justify-between h-[813px]  drop-shadow-2xl ">
<DashboardLayout/>
<div className="w-[942px] flex h-full bg-amber-200 rounded-l-[15px]" >
    <Outlet/>
</div>

</div>



    </div>
  )
}
export default UserProfile