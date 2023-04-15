import Specific_card from "../../components/Specific_card/Specific_card";
import Similar from "../../components/Similar/Similar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Specific = () => {
  const {product_id,category}=useParams();
 

   
  


 useEffect(()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 },[product_id])
  useEffect(() => {
    fetching_data();
  }, [product_id]);


  type specificdata={
    product_name:string,
    product_dis:string,
    price:string,
    product_img:string,
    dis_listarray:Object
  }
 
  const [show,setshow]=useState<specificdata>({
    product_dis:"",
    product_name:"",
    price:"",
    dis_listarray:{},
    product_img:""
    })

  const fetching_data=async()=>{
    const {data}=await axios.post("/api/product/public_product_info",{
      product_id:product_id
    });
    
    //only taking data which is need to show the user;
    setshow({product_name:data.product_name,product_dis:data.product_dis,price:data.price,dis_listarray:data.dis_listarray,product_img:data.product_img});
  }
 

  return (
    <>
    
      <Specific_card heading={show.product_name} price={show.price} dis={show.product_dis} disarray={show.dis_listarray} product_id={product_id} product_img={show.product_img}/>

      <Similar category={category} product_id={product_id}/>

    </>
  )
}

export default Specific