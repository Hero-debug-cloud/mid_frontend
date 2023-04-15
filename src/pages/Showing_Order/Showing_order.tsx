import { useEffect, useState } from "react"
import styles from "./showing_order.module.css"
import Finalorder_card from "../../components/Finalorder_card/Finalorder_card";
import axios from "axios";
import { useCookies } from "react-cookie";

const Showing_order = () => {
    

    const [cookies]=useCookies();
    
    const [show,setshow]=useState(false);
    const [datas,setdatas]=useState([]);

    useEffect(()=>{
        checking_user();
    },[]);

    const checking_user=()=>{
        const token=cookies["token"];
        if(token==undefined){
            setshow(true);
        }
        else{
            fetching_ids();
        }
    }

    const fetching_ids=async()=>{
        const ids=await axios.post("/api/user/getorder",{
        }, { headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
        fetching_data(ids.data);
    }
    const fetching_data=async(ids:any)=>{
        const data=await axios.post("/api/product/cartinfo",{
            ids
        }, { headers: {"Authorization" : `Bearer ${cookies["token"]}`} })
        setdatas(data.data);

        if(data.data.length){
            setshow(false)
        }else{
            setshow(true)
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
    <div className={styles.order}>
        <div className={styles.inner}>
            <h1 className={styles.heading}>
             {show?"You don't have any Order Yet":"Your Order are"}
            </h1>

            <div className={styles.container}>
                {
                    datas.map((value:displaying)=>{
                     return <Finalorder_card heading={value.product_name} dis={value.product_dis} price={value.price} product_id={value._id} img={value.product_img} removing={fetching_ids}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Showing_order