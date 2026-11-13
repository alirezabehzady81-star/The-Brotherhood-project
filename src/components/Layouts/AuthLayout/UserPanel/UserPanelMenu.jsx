import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserPanel.module.css'

const UserPanelMenu = ({pageName, pageRouter}) => {
  return (
    <Link className="block mb-[15px]" to={pageRouter}>{pageName}</Link>
  )
}

export default UserPanelMenu