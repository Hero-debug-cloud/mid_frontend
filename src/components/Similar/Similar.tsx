import { useEffect, useState } from "react";
import Product_card from "../Product_card/Product_card";
import styles from "./similar.module.css";
import axios from "axios";


type propstype={
  category:string|undefined,
  product_id:string|undefined
}

const Similar = ({category,product_id}:propstype) => {
 
  //to show similar component or not;
  const[show,setshow]=useState(false);
 
  useEffect(()=>{
     fetching_data();
  },[])
  
  type displaying={
    _id:string,
    price:string,
    product_name:string,  
    category:string,
    product_img:string
}
const [datas,showdatas]=useState([]);
const fetching_data=async()=>{
  try{
    const data=await axios.post("/api/product/similar",{
      category:category,
      product_id:product_id,
      limit:4
    })
    //fix this bug like filtering the data later but want to filter in the backend and then ===0
    if(data.data.length==1){
      setshow(true)
    }
    showdatas(data.data);
  }catch(err){
    console.log(err);
  }
}
  return (
  
      
      <div className={styles.similar}>
      <div className={styles.inner}>
         {show?"": <h1 className={styles.heading}>Similar Ads</h1>}
      </div>
      <div className={styles.container}>
          {
            datas.map((value:displaying)=>{

              //custom filter : not to show the same element;z
              if(value._id!=product_id)
              return <Product_card product_id={value._id} heading={value.product_name} price={value.price} category={value.category} date="Oct 17" product_img={value.product_img}/>
            })
          }
      </div>
  </div>
    
    
  )
}

export default Similar