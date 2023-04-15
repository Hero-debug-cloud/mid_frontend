import Admin_apishow from "../Admin_apishow/Admin_apishow";
import styles from "./api.module.css";
import {UserData} from "../../../../Database/data.js";
import { useState } from "react";

const Admin_api = () => {
  const [userData,setUserData]=useState({
    // labels:UserData.map((data)=>data.year),
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
    <div className={styles.api}>
      <div className={styles.inner}>
          <div className={styles.container}>

              <div className={styles.cont}>
                <div className={styles.left}><Admin_apishow chartData={userData}/></div>
                <div className={styles.right}>
                  <h2 className={styles.heading}>User's Call</h2>
                  <div className={styles.number}>99</div>
                </div>
              </div>
              <div className={styles.cont}>
                <div className={styles.left}><Admin_apishow chartData={userData}/></div>
                <div className={styles.right}>
                  <h2 className={styles.heading}>Product's Call</h2>
                  <div className={styles.number}>99</div>
                </div>
              </div>
              <div className={styles.cont}>
                <div className={styles.left}><Admin_apishow chartData={userData}/></div>
                <div className={styles.right}>
                  <h2 className={styles.heading}>Authentication Calls</h2>
                  <div className={styles.number}>99</div>
                </div>
              </div>
              <div className={styles.cont}>
                <div className={styles.left}><Admin_apishow chartData={userData}/></div>
                <div className={styles.right}>
                  <h2 className={styles.heading}>User's Call</h2>
                  <div className={styles.number}>99</div>
                </div>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Admin_api