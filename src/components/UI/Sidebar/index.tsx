import React from 'react'

import SidebarUtils from './components/SidebarUtils'

import './index.css'
import SidebarLinks from './components/SidebarLinks'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarLinks />
      <SidebarUtils />
    </aside>
  )
}
