import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard
      <div>
        <div className="w-[190px] h-[77px] relative rounded-[5px] bg-[rgba(249,249,249,1)] shadow-[0_0_2px_rgba(0,0,0,0.25)]">

          <div className="absolute w-[57px] h-[57px] rounded-full bg-[rgba(0,180,175,1)] bg-[url('../assets/pictures/common/course.svg')] bg-cover bg-center left-[19px] top-[-28px]">
          </div>

          <p className="text-[30px] text-[rgba(0,180,175,1)]">
            4 دوره
          </p>

          <p className="text-[18px] text-[rgba(167,167,167,1)]">
            شرکت کرده اید
          </p>

        </div>
      </div>
    </div>
  )
}

export default Dashboard