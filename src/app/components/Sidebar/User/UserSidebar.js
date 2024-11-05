import React from 'react'
import SidebarStyles from '@/app/components/Sidebar/styles/sidebar.module.css';
import Link from 'next/link';

const UserSidebar = () => {
  return (
    <>
      <aside className={SidebarStyles.sidebar}>
      <h2>Account Settings</h2>
      <ul>
        <li><Link href="#">Profile</Link></li>
        <li><Link href="#">Settings</Link></li>
        <li><Link href="#">Subscription</Link></li>
        <li><Link href="#">Payment</Link></li>
      </ul>
    </aside>
    </>
  )
}

export default UserSidebar