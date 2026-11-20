import React from 'react'
import { NavLink } from 'react-router-dom'

const UserPanelMenu = ({ pageName, pageRouter }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `block mb-3.75 pr-8 py-2 pl-0 ml-0 rounded-r-full border-l-[3px] transition-all ${
          isActive
            ? 'bg-white border-l-[rgba(228,137,0,1)]'
            : 'bg-transparent border-l-transparent'
        }`
      }
      to={pageRouter}
    >
      {pageName}
    </NavLink>
  )
}

export default UserPanelMenu