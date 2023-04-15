import { useState } from "react"
import styles from "./login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";


const Login = () => {

  const navigate=useNavigate();
  const [cookies,setCookie,removeCookie]=useCookies(["token"]);


  const [checked,setchecked]=useState(false);
  
  const togglehandle=()=>{
    setchecked((prev)=>!prev);
  }

  type usertype={
    username:string,
    password:string
  }

  const [user,setuser]=useState<usertype>({
    username:"",
    password:""
  })

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setuser({...user,[e.target.name]:e.target.value});
  }


  const userpasserror=()=> toast("Username or Passowrd is Wrong");
  const internalerror=()=> toast("Internal Error, Please try Again...");
  const success=()=> toast("Login Successfully...");
  const submit=async()=>{
    await axios.post("/api/auth/login_user",user).then(
      function(response){
        console.log("real token for this user is "+response.data);
        setCookie("token",response.data);
        success();
        navigate("/true");
      }
    ).catch(
      function(error){
        if(error.response.status==401){
          userpasserror();
        }
        else{
          internalerror();
        }
      }
    )
    
  }

  return (
        <div className={styles.container}>
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
          <div className={styles.username}>
            <label className={styles.naming}>Username</label>
            <br/>
            <input type="text" placeholder="Enter your Username" className={styles.input} name="username" value={user.username} onChange={handlechange}/>
          </div>
          <div className={styles.password}>
            <label className={styles.naming}>Password</label>
            <br/>
            <input type={checked?"text":"password"} placeholder="Enter your Password" className={styles.input} name="password" value={user.password} onChange={handlechange}/>
            <div className={styles.show_cont}>
              <input type="checkbox" name="pass" className={styles.check} checked={checked} onClick={togglehandle}/>
              <span className={styles.pass_content}>Show Password</span>
            </div>
          </div>
          <button className={styles.submit} onClick={submit}>Login</button>
        </div>
        
        
  )
}

export default Login