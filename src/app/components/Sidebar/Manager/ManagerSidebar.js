import React from 'react'
import SidebarStyles from '@/app/components/Sidebar/styles/sidebar.module.css';

const ManagerSidebar = () => {
  return (
    <>
      <aside className={SidebarStyles.sidebar}>
      <h2>Account Settings</h2>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Subscription</a></li>
        <li><a href="#">Payment</a></li>
      </ul>
    </aside>
    </>
  )
}

export default ManagerSidebar