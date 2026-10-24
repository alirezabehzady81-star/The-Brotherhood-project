import React from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from "react-router-dom";
import LogoutButton from './LogoutButton';
export const DashboardLayout = () => {
    const navigate = useNavigate();
      const handleLogout = () => {
   
    navigate("/login");              
  };

  return (
<div  dir='ltr' className="w-[308px]  h-full bg-[#01CEC9] flex flex-col rounded-r-[15px] pt-[47px] rela">
<div className="items-center flex flex-col w-full">
<div className="w-[125px] h-[125px] ">
    <img src="/src/img/bc9913715ee35ce92b534bff6eb4aa2013f6852e.png" alt="" className="rounded-full" />
</div>
<p className="w-full  size-[28px] font-bold mt-[21px] text-[#004744]"> فلان فلانی خوش آمدید</p>
<div className="w-[258px] h-0 border border-[#14BAB6] mt-[27px]"></div>
    </div>

<div className="w-[283px] h-[377px] flex flex-col  ml-0">
<Sidebar/>
</div>
      
        <LogoutButton onLogout={handleLogout} />
     
  
</div>


  )
}
export default DashboardLayout