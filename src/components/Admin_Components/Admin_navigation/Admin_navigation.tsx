import styles from "./admin_navigation.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin_navigation = () => {
    const [activeLink, setActiveLink] = useState<any>();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const index = links.findIndex((link) => link.to === path);
        setActiveLink(index);
      }, [location.pathname]);

      const links = [
        { label: "Users", to: "/admin_panel" ,logo:FaUserAlt},
        { label: "Products", to: "/admin_panel/admin_products",logo:FaProductHunt },
        { label: "API's", to: "/admin_panel/admin_api",logo: AiFillApi },
        { label: "Orders", to: "/admin_panel/admin_orders" ,logo:BsCartCheckFill},
        { label: "Revenue", to: "/admin_panel/admin_revenue" ,logo:BsFileEarmarkBarGraphFill},
      ];

  return (
    <div className={styles.navigation}>
      <div className={styles.inner}>
        
        {links.map((link, index) => (
          <Link
            key={index}
            style={{ textDecoration: 'none' ,color:"black"}}
            to={link.to}
            className={styles.link}
          >
            <div className={styles.container} style={{ background: activeLink == index ? "#2D8331" : "" }}>
          <link.logo color="white" size={20} />
          <div className={styles.name}>{link.label}</div>
        </div>
          </Link>
           ))}
      </div>
    </div>
  );
};

export default Admin_navigation;
