import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserPanel.module.css'

const UserPanelMenu = ({pageName, pageRouter}) => {
  return (
    <Link className={styles.menuItem} to={pageRouter}>{pageName}</Link>
  )
}

export default UserPanelMenu