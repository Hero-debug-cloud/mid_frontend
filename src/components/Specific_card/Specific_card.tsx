import styles from "./specific_card.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import classNames from "classnames";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cookies, useCookies } from "react-cookie";


type propstype={
  heading:string,
  price:string,
  dis:string,
  disarray:Object,
  product_id:string|undefined,
  product_img:string
}
const 
Specific_card = ({heading,price,dis,disarray,product_id,product_img}:propstype) => {


  const [cookies]=useCookies();

  const orderlink="/order/"+product_id;
 
  //fav cheacker;
  const [favchecker,setfavcheacker]=useState(Boolean);
  
 const togglefav=async()=>{
  setfavcheacker(prev=>!prev);
  if(!favchecker){
    await axios.post("/api/user/addtofav",{
       product_id
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
  }
  else{
    await axios.post("/api/user/removefromfav",{
      product_id
   },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
  }
 }
 

   
  //cart is false;
  const [cart,setcart]=useState(Boolean);
  const[response,setresponse]=useState([]);

  useEffect(()=>{
    fetchingcart();
  },[]);

  const fetchingcart=async()=>{
    const data=await axios.post("/api/user/checkcart",{
      product_id, 
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} });

    const checkfav=await axios.post("/api/user/checkfav",{
      product_id
    },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} })

    setresponse(data.data);
    if(data.data.length){
      setcart(true);
    }
    if(checkfav.data.length){
      setfavcheacker(true);
    }

  }

  //cart custom styling;
  const cartstyle={
    backgroundColor:cart?"lightgray":"#19A2D8",
    border:cart?"1px solid lightgray":"1px solid #19A2D8",
    color:cart?"black":"white"
  }

   // fix disarray is not showing

   //popup for the cart;
   const addedtocart=()=> toast("Added to Cart");
   const internalerror=()=> toast("Internal Error, Please try Again...")
   // adding product id to the cart;
   const addingtocart=async()=>{
    if(!cart){
      await axios.post("/api/user/addtocart",{
        product_id
      },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).then(function(response){
        addedtocart();
      }).catch(function(err){
        internalerror();
      });
      setcart(true);
    }
      

   }

  return (
    <div className={styles.card} id={product_id}>
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
        <div className={classNames(styles.left,styles.centre)}>
          <div className={classNames(styles.img_cont,styles.centre)}>
            <img src={product_img} alt="product" className={styles.img}/>
          </div>
        </div>
        <div className={styles.right}>

          <h1 className={styles.heading}>
            {heading}
          </h1>
          <div className={styles.school_date}>
            <div className={styles.school}>DIT University, Dehradun &nbsp;|&nbsp;</div>
            <div className={styles.date}>Oct 17</div>
          </div>
          <div className={styles.price}>
           <span className={styles.symbol}>$</span>
           <span className={styles.real}>{price}</span>
           <div className={classNames(styles.fav_icon,styles.centre)} onClick={togglefav}>
             <AiOutlineHeart size={30} color={favchecker?"red":""} />
             
           </div>
           
          </div>
          
          <div className={styles.main}>
          <Link  to={orderlink} style={{ textDecoration: 'none' ,color:"black"}}><button className={styles.buy}>Buy Now</button></Link>
             <button className={styles.cart} onClick={addingtocart} style={cartstyle}>Add to Cart</button>
          </div>

          <div className={styles.dis_cont}>
            <h2 className={styles.dis_heading}>Description</h2>
            <div className={styles.dis_group}>
              <div className={styles.name}>Product Type</div>
              <div className={styles.value}>Stationary</div>
            </div>
            <div className={styles.dis_group}>
              <div className={styles.name}>Seller Type</div>
              <div className={styles.value}>Individual</div>
            </div>
            <div className={styles.dis_group}>
              <div className={styles.name}>Brand Name</div>
              <div className={styles.value}>Omega</div>
            </div>
            <div className={styles.dis_group}>
              <div className={styles.name}>Location</div>
              <div className={styles.value}>Boys Hostel</div>
            </div>
          </div>

          <div className={styles.dis}>
         {dis}
          </div>
 

        </div>
      </div>
    </div>
  );
};

export default Specific_card;
