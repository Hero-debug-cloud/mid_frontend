import { toast } from "react-toastify";
import styles from "./fav_card.module.css";
import axios from "axios"
import { useCookies } from "react-cookie";

type propstype={
    heading:string,
    dis:string,
    price:string,
    product_id:string,
    img:string,
    removing:Function
}
const Fav_card = ({heading,dis,price,product_id,img,removing}:propstype) => {

  const [cookies]=useCookies(["token"]);
 

  //popup
  const success=()=> toast("Removed from Favourite");
  const internalerror=()=> toast("Internal Error, Please try Again...");

    const remove=async()=>{
       await axios.post("/api/user/removefromfav",{
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
          <div className={styles.remove}>Remove</div>
        </div>
      </div>
    </div>
  );
};

export default Fav_card;
