import { FormEvent, useRef, useState } from "react";
import styles from "./register.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type propstype = {
  go: Function;
};

const Register = (props: propstype) => {
  const [checked, setcheck] = useState(false);
  const togglehandle = () => {
    setcheck((prev) => !prev);
  };

  
  const errorishere = () => toast("Username Already Registered!!");
  const internalerror = () => toast("Internal Error, Please try Again...");

  // const navigate=useNavigate();

  //all variables;
  type values = {
    firstname: string;
    lastname: string;
    phoneno: string;
    email: string;
    password: string;
    username: string;
  };
  const [user, setuser] = useState<values>({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    password: "",
    username: "",
  });

  const handlingchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("/api/auth/register_user", user).then(
      function(response){
        props.go();
      }
    ).catch(function (error) {
      if(error.response.status==403){
        errorishere();
      }
      else{
        internalerror();
      }
    });
    
  };

  return (
    <form className={styles.container} onSubmit={submit}>
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
      <div className={styles.name}>
        <label className={styles.naming}>Name</label>
        <br />
        <input
          type="text"
          placeholder="First Name"
          className={styles.half_input1}
          onChange={handlingchange}
          name="firstname"
          value={user.firstname}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className={styles.half_input2}
          onChange={handlingchange}
          value={user.lastname}
          name="lastname"
          required
        />
      </div>
      <div className={styles.phone}>
        <label className={styles.naming}>Phone Number</label>
        <br />
        <input
          type="text"
          placeholder="Enter you Phone Number"
          className={styles.input}
          onChange={handlingchange}
          value={user.phoneno}
          name="phoneno"
          required
          maxLength={10}
          minLength={10}
        />
      </div>
      <div className={styles.email}>
        <label className={styles.naming}>E-mail</label>
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          className={styles.input}
          onChange={handlingchange}
          value={user.email}
          name="email"
          required
        />
      </div>
      <div className={styles.username}>
        <label className={styles.naming}>Username</label>
        <br />
        <input
          type="text"
          placeholder="Enter your Username"
          className={styles.input}
          onChange={handlingchange}
          value={user.username}
          name="username"
          required
        />
      </div>
      <div className={styles.password}>
        <label className={styles.naming}>Password</label>
        <br />
        <input
          type={checked ? "text" : "password"}
          placeholder="Enter your Password"
          className={styles.input}
          onChange={handlingchange}
          value={user.password}
          name="password"
          required
        />
        <div className={styles.show_cont}>
          <input
            type="checkbox"
            className={styles.check}
            name="checkbox"
            checked={checked}
            onClick={togglehandle}
          />
          <span className={styles.pass_content}>Show Password</span>
        </div>
      </div>
      <button className={styles.submit} type="submit">
        SignUp
      </button>
    </form>
  );
};

export default Register;
