import { useEffect, useState } from "react";
import styles from "./favourite.module.css";
import Fav_card from "../../components/Fav_card/Fav_card";
import axios from "axios";
import { useCookies } from "react-cookie";

const Favourite = () => {
    const [show,setshow]=useState(false);
    const [cookies,setCookie,removeCookie]=useCookies(["token"]);
    //static user id;
  const user_id="643937f5d9bd0468d63d667b";
//   const token=cookies["token"];

  const [datas,setdatas]=useState([]);

    useEffect(()=>{
        checking_user();
    },[]);

    const checking_user=()=>{
        const token=cookies["token"];
        if(token==undefined){
         //if there is no token what to show;
         setshow(true);
        }
        else{
         //if token is there what to do;
         fetching_ids();
        }
    }

    const fetching_ids=async()=>{
 
        const ids=await axios.post("/api/user/getfav",{},{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} });
        fetching_data(ids.data);
    }
    const fetching_data=async(ids:any)=>{
       const data=await axios.post("/api/product/cartinfo",{
          ids
       },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
       setdatas(data.data)
       if(data.data.length){
        setshow(false)
       }
       else{
        setshow(true)
       }
    }
  
    
    type displaying={
        product_name:string,
        product_dis:string,
        _id:string,
        price:string,
        product_img:string
    }
  return (
    <div className={styles.fav}>
        <div className={styles.inner}>
            <h1 className={styles.heading}>
                Your Favourite Products List is {show?"Empty...":""}
            </h1>
            <div className={styles.container}>
                {
                    datas.map((value:displaying)=>{
                        return <Fav_card heading={value.product_name} dis={value.product_dis} price={value.price} product_id={value._id} img={value.product_img} removing={fetching_ids}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Favourite