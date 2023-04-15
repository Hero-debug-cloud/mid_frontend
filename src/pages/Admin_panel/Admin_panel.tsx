import { Outlet } from "react-router-dom"
import Admin_navbar from "../../components/Admin_Components/Admin_navbar/Admin_navbar"
import Admin_navigation from "../../components/Admin_Components/Admin_navigation/Admin_navigation"
import styles from "./admin_panel.module.css"

const Admin_panel = () => {

  return (
    <div className={styles.admin}>
        <div className={styles.inner}>
            <Admin_navbar/>
            <Admin_navigation/>
            <div className={styles.container}>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Admin_panel