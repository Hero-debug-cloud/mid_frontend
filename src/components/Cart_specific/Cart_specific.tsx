import axios from "axios";
import styles from "./cart_specific.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";


type propstype={
  heading:string,
  dis:string,
  price:string
  product_id:string,
  removing:Function,
  product_img:string
}

const Cart_specific = ({heading,dis,price,product_id,removing,product_img}:propstype) => {

  const [cookies]=useCookies();


  //popup
  const success=()=> toast("Removed from Cart");
  const internalerror=()=> toast("Internal Error, Please try again...")
  //removed function 
  const remove=async()=>{
   await axios.post("/api/user/removefromcart",{
    product_id,
   },{headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err){
    internalerror();
   });  
   success(); 
   removing();
  }

  const orderlink="/order/"+product_id;
  
  return (
    <div className={styles.container}>
      <div className={styles.img_cont}>
        <img src={product_img} alt="img" className={styles.img} />
        </div>
      <div className={styles.info_cont}>
        <h2 className={styles.heading}>
          {heading}
        </h2>
        <div className={styles.dis}>
          {dis}
        </div>
      </div>
      <div className={styles.price}>
        <h1 className={styles.price_head}>Price</h1>
        <span className={styles.symbol}>$</span>
        <span className={styles.real}>{price}</span>
      </div>
      <div className={styles.btn}>
        <button className={styles.remove} onClick={remove}>Remove</button>
        <Link to={orderlink} style={{ textDecoration: 'none' ,color:"black"}}><button className={styles.buy}>Buy Now</button></Link>
        
      </div>
    </div>
  );
};

export default Cart_specific;
