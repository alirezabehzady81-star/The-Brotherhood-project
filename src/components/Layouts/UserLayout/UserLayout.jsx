import React from 'react'
import UserPanel from './UserPanel/UserPanel'
import { LoginButton } from '../../common/LoginButton/LoginButton'
import { Logo } from '../../core/icons/Logo/Logo'
import AccountButton from '../../common/AccountButton/AccountButton'

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* header */}
      <div className="w-full h-30 flex justify-center items-end">
        <div className="h-12.5 w-312 mb-4.25 flex justify-between items-center">
          <Logo />
          <AccountButton/>
        </div>
      </div>
      {/* content */}
        <UserPanel/>

    </div>
  )
}

export default UserLayout