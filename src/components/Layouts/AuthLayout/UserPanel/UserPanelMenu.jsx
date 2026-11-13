import React from 'react'
import { Link } from 'react-router-dom'

const UserPanelMenu = ({pageName, pageRouter}) => {
  return (
    <Link className="block mb-3.75" to={pageRouter}>{pageName}</Link>
  )
}

export default UserPanelMenu