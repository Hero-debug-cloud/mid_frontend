import axios from "axios"
import styles from "./finalorder_cart.module.css"
import { toast } from "react-toastify"
import { useCookies } from "react-cookie"

type porpstype={
    heading:string,
    dis:string,
    img:string,
    price:string,
    product_id:string,
    removing:Function
}
const Finalorder_card = ({heading,dis,price,img,product_id,removing}:porpstype) => {

  const [cookies]=useCookies();
    
  //popup
  const success=()=> toast("Removed from Orders");
  const internalerror=()=> toast("Internal Error, Please try Again...");

    const remove=async()=>{
     await axios.post("/api/user/removefromorder",{
        product_id
     },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err){
      internalerror();
     })
     success();
     removing();
    }
  return (
    <div className={styles.cont}>
    <div className={styles.left}>
      <div className={styles.img_cont}>
          <img src={img} alt="img" className={styles.img} />
          </div>
    </div>
    <div className={styles.right}>
      <div className={styles.info}>
        <h1 className={styles.head}>{heading}</h1>
        <div className={styles.dis}>
          {dis}
        </div>
        <h2 className={styles.price_cont}>
          <span className={styles.smbol}>$ </span>
          <span className={styles.price}>{price}</span>
        </h2>
      </div>
      <div className={styles.btn} onClick={remove}>
        <div className={styles.remove}>Cancel Order</div>
      </div>
    </div>
  </div>
  )
}

export default Finalorder_card