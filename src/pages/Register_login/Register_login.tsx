import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import styles from "./register_login.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Registerlogin = () => {

  const[check,setcheck]=useState("register");


  //changing css of the element;
  const inner={
    border:"1px solid black",
    borderRadius: "5px",
    width: "460px",
    height: check=="register"?"590px":"380px",
    padding: "10px",
  };
  const register={
    borderBottom:check=="register"?"4px solid #19A2D8":"none"
  }
  const login={
    borderBottom:check=="login"?"4px solid #19A2D8":"none"
  }
  const success = () => toast("Your Registration is Complete Now...");
  const gottologin=()=>{
    success();
    setcheck("login");
  }

  return (
    <div className={styles.register_login}>
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
      <div style={inner}>
         <div className={styles.choose_cont}>
           <h1 style={register} className={styles.register} onClick={()=>{setcheck("register")}}>
             Register
           </h1>
           <h1 style={login} className={styles.login}onClick={()=>{setcheck("login")}}>
             LogIn
           </h1>
         </div>
        
        {
          check=="register"?<Register go={gottologin}/>:<Login/>
        }
        <div className={styles.tandc}>By continuing, you agree to our Terms and Conditions and Privacy 
Statement</div>
      </div>
    </div>
  )
}

export default Registerlogin;