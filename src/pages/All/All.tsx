import styles from "./all.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

const All = () => {
  
  return (
    <>
      <Navbar/>
      <Outlet/>

      {/* check url and it is empty or not; */}
      <Footer down='false'/>
    </>
  )
}

export default All