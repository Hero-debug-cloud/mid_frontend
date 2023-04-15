import { useParams } from "react-router-dom"
import Product_card from "../../components/Product_card/Product_card"
import styles from "./search.module.css"
import { createRef, useEffect, useState } from "react"
import axios from "axios";
import React from "react";

const Search = () => {
  const {product_name}=useParams();
  

  const [min,setmin]=useState("0");
  const [max,setmax]=useState("999");

  function handlemin(event:React.ChangeEvent<HTMLInputElement>){
    setmin(event.target.value);
  }
  function handlemax(event:React.ChangeEvent<HTMLInputElement>){
    setmax(event.target.value);
  }
  
  function submit(){
    fetching_data();
  }

  useEffect(()=>{
   fetching_data();
  },[product_name]);

  const [show,setshow]=useState([]);
  const fetching_data=async()=>{
    const data=await axios.post("/api/product/searchbox",{
      product_name,
      min,
      max
    });
    setshow(data.data);
  }

  type displaying={
    _id:string,
    product_name:string,
    price:string,
    category:string,
    product_img:string
  }
  return (
    <div className={styles.search}>
        <div className={styles.left}>
          <div className={styles.group}>
            <h1 className={styles.heading}>Price</h1>
            <div className={styles.min_cont}>
              <span className={styles.symbol}>$</span>
              <input type="text" placeholder="Min" className={styles.min} value={min} name="min" onChange={handlemin}/>
            </div>
            <div className={styles.max_cont}>
              <span className={styles.symbol}>$</span>
              <input type="text" placeholder="Max" className={styles.max} value={max} name="max" onChange={handlemax}/>
            </div>
            <button className={styles.price_btn} onClick={submit}>Go</button>
          </div>
        </div>
        <div className={styles.right}>
          {
            show.map((value:displaying)=>{
              return <Product_card heading={value.product_name} price={value.price} product_id={value._id} category={value.category} date="Oct 17" product_img={value.product_img} />
            })
          }
        </div>
    </div>
  )
}

export default Search