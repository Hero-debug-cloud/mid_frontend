import styles from "./admin_navbar.module.css"
import {FaUserAlt} from "react-icons/fa";

const Admin_navbar = () => {
  return (
   <div className={styles.navbar}>
     <div className={styles.inner}>
        <h1 className={styles.heading}>Admin Dashboard</h1>
        <div className={styles.user}>
            <FaUserAlt color="white" size={25}/>
            <div className={styles.name}>User</div>
        </div>
     </div>
   </div>
  )
}

export default Admin_navbar