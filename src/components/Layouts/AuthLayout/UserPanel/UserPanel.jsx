import React, { useState } from 'react'
import styles from './UserPanel.module.css'
import UserPanelMenu from './UserPanelMenu'
const UserPanel = () => {
    const   [menuState, setmenuState] = useState([
        {id: 1, name: "داشبورد", pageRoute: "/"},
        {id: 2, name: "اطلاعات کاربری", pageRoute: "/"},
        {id: 3, name: "دوره های من", pageRoute: "/"},
        {id: 4, name: "دوره های رزرو شده", pageRoute: "/"},
        {id: 5, name: "دیدگاه های من", pageRoute: "/"},
        {id: 6, name: "علاقه مندی ها", pageRoute: "/"},
        {id: 7, name: "تنظیمات امنیتی", pageRoute: "/"}
    ]) 
  return (
    <div className={styles.userPanel}>
        <div className={styles.panelBar}>
            <div className={styles.profile}></div>
            <div className={styles.wellcome}>فلان فلانی خوش آمدید</div>
            <div className={styles.menu}>
                {
                    menuState.map((item, index) => {
                        return(
                            <UserPanelMenu key={index} pageName={item.name} pageRouter={item.pageRoute}/>
                        )
                    })
                }
            </div>
            <div className={styles.logout}>خروج از حساب </div>
        </div>
        <div className={styles.panelBox}>
            <button className={styles.homeBtn} type="button"></button>

        </div>
    </div>
  )
}

export default UserPanel