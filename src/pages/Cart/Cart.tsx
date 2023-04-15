import { useEffect, useState } from "react";
import Cart_specific from "../../components/Cart_specific/Cart_specific"
import styles from "./cart.module.css"
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";


const Cart = () => {
  const [cookies]=useCookies();

 //checking if cart is empty or not;
 const [hide,sethide]=useState(true);
  const [datas,setdatas]=useState([]);

  useEffect(()=>{
    checking_user();
  },[])
  const checking_user=()=>{
    const token=cookies["token"];
    if(token==undefined){
      sethide(false);
    }
    else{
      fetching_Cart();
    }
  }
  const fetching_Cart=async()=>{
    const product_ids=await axios.post("/api/user/getcart",{
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
    fetching_data(product_ids.data);
  }
  const fetching_data=async(ids:any)=>{
       const data=await axios.post("/api/product/cartinfo",{
        ids
       },{headers: {"Authorization" : `Bearer ${cookies["token"]}`} });
       
       setdatas(data.data);
       if(data.data.length==0){
        sethide(false);
       }
  }
  type displaying={
     product_name:string,
     product_dis:string,
     price:string,
     _id:string,
     product_img:string
  }
  return (
    <>
    <div className={styles.cart}>
      <div className={styles.inner}>

        {/* check cart is empty or not */}
        <h1 className={styles.heading}>
          Your Cart {hide?"":"is Empty..."}
        </h1>

        <div className={styles.container}>
          {
            datas.map((value:displaying)=>{
             return <Cart_specific heading={value.product_name} dis={value.product_dis} price={value.price} product_id={value._id} removing={fetching_Cart} product_img={value.product_img}/>
            })
          }
         
        
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Cart