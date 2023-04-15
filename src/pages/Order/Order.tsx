import styles from "./order.module.css"
import Order_specific from "../../components/Order_specific/Order_specific"
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Order = () => {

  const navigate=useNavigate();
  const {product_id}=useParams();

  const [cookies]=useCookies();

  useEffect(()=>{
    fetching_data();
  },[]);


  type datatype={
    product_name:string,
    product_dis:string,
    price:string,
    product_img:string
  }
  const [data,setdata]=useState<datatype>({
    product_name:"",
    product_dis:"",
    price:"",
    product_img:""
  });
  const fetching_data=async()=>{
    const detail=await axios.post("/api/product/product_info",{
      product_id
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
   setdata(detail.data); 
  }

  const success=()=> toast("Order Confirmed");
  const internalerror=()=> toast("Internal Errror, Please try again...");

  //order confirm function
  const order_confirm=async()=>{
    //adding to the user order list;
    await axios.post("/api/user/addtoorder",{
      product_id,
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err){
      internalerror();
    })
    //removing from the user cart list;
    await axios.post("/api/user/removefromcart",{
      product_id,
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err) {internalerror()});

    success();
    navigate("/");
  }
  return (
    <>
     <div className={styles.cont}>
         <h1 className={styles.heading}>Your Order is Ready to Go...</h1>
         <h2 className={styles.heading2}>Order Summary</h2>  


        <div className={styles.container}>
        <div className={styles.cont1}>
           <Order_specific heading={data.product_name} dis={data.product_dis} price={data.price} product_img={data.product_img}/>
         </div>


          {/* change db acording to the seller with will be taking address and contact info of the seller kaam user; */}
         <div className={styles.summary}>
            <div className={styles.add_cont}>
              <h1 className={styles.add_heading}>Seller Addreess</h1>
              <div className={styles.ad}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quam.</div>
            </div>
            <div className={styles.contact_cont}>
              <h1 className={styles.contact_heading}>Seller Contact</h1>
              <div className={styles.contact}>1234567891</div>
            </div>
             <button className={styles.confirm} onClick={order_confirm}>Confirm Your Order</button>
         </div>
        </div>
         
     </div>
    </>

  )
}

export default Order