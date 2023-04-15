import styles from "./navbar.module.css";
import {BsSearch} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/mid.mart.png"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { defined } from "chart.js/dist/helpers/helpers.core";
import axios from "axios";
import { UserData } from "../../../Database/data";
import { useLocation } from 'react-router-dom';



const Navbar = () => {

  const navigate=useNavigate();
  const [cookies,setCookie,removeCookie]=useCookies(["token"]);
  const location=useLocation();

  //user is present or not;
  const[user,setuser]=useState(false);
  ///user data or firstname;
  const [userdata,setuserdata]=useState("");
 
  useEffect(()=>{
     checking();
    //if it undefined then show login and register other wise 
    // call user data api and get user name;
    // see how to make api call after adding header to it;
  },[user,userdata,location]);

  

  const checking=async()=>{
    const token=cookies["token"];
    if(token==undefined){
     setuser(false);
    }
    else{
    
     const id=await axios.get("/api/auth/token_check", { headers: {"Authorization" : `Bearer ${token}`} });
     setuserdata(id.data);
     setuser(true);
     
    }
  }

  
  // if(location.pathname=="/true"&&user){
  //   console.log("i am here")
  //   checking();
  // }

  const handleloginoruser=async()=>{
    if(user){
      //drop down menu on hover;
      console.log("user");
    }
    else{
      navigate("/registerlogin");
    }
  }

  //find a way to clear search when pages changes;
  const [search,setsearch]=useState("");

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setsearch(e.target.value);
  }

  const searchlink="/search/"+search;
  
  const searching=()=>{
     if(search!=="")
       navigate(searchlink);
    else
      navigate("/")
  }

  return (
    <div className={styles.navbar}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <div className={styles.inner}>
            <div className={styles.left}>
            <Link to="/" style={{ textDecoration: 'none' ,color:"black"}}>
               <div className={styles.img_cont}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </div>
            </Link>
                
                <div className={styles.search_cont}>
                    <input type="text" placeholder="Search..." className={styles.input} value={search} onChange={handlechange}/>
                    
                    <div className={styles.search_icon} onClick={searching}>
                      <BsSearch />
                    </div>
                  
                    
                    
                </div>
            </div>
            <div className={styles.right}>
                <Link to="/posting" style={{ textDecoration: 'none' ,color:"black"}}>
                  <div className={styles.post}>
                    Post Free Ads!
                   </div>
                </Link>
                

                
                <div className={styles.log_cont} onClick={handleloginoruser}>
                    <AiOutlineUser size={25}/>
                    <span className={styles.log_text}>{user?userdata:"Login/SignUp"}</span>
                </div>
                
                
                <Link to="/favourite" style={{ textDecoration: 'none' ,color:"black"}}>
                <div className={styles.fav_icon}><AiOutlineHeart size={25}/></div>
                </Link>
                

                <Link to="/cart" style={{ textDecoration: 'none' ,color:"black"}}>
                <div className={styles.cart_icon} ><AiOutlineShoppingCart size={25}/></div>
                </Link>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Navbar