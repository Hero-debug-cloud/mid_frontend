import styles from "./revenue.module.css";
import Admin_ordershow from "../Admin_ordershow/Admin_ordershow";
import {UserData} from "../../../../Database/data.js";
import { useState } from "react";
import Admin_cartshow from "../Admin_cartshow/Admin_cartshow";


const Admin_revenue = () => {
  const [userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[
      {
        label:"Users Gained",
        data:UserData.map((data)=>data.userGain),
        backgroundColor:[
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor:"black",
        borderWidth:2,
      }
    ]
  })
  return (
    <div className={styles.revenue}>
        <Admin_ordershow chartData={userData}/>
        <Admin_cartshow chartData={userData}/>
    </div>

  )
}

export default Admin_revenue