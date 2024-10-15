import styles from './dashboard.module.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

export default function Dashboard() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div >
        <Outlet />
      </div>
    </div>
  )
}
