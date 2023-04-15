import styles from "./product_card.module.css"
import { Link } from "react-router-dom";

type propstype={
    price:string,
    heading:string,
    date:string,
    product_id:string,
    category:string,
    product_img:string
}

const Product_card = (props:propstype) => {

    const link="/product/"+props.product_id+"/"+props.category;

    
    
  return (
    <div className={styles.product_card}>
        <div className={styles.inner}>
            <div className={styles.img_cont}>
                <img src={props.product_img} alt="product_img" className={styles.img}/>
            </div>
            <div className={styles.content}>
                <div className={styles.price_cont}>
                    <span className={styles.symbol}>$ </span>
                    <span className={styles.price}>{props.price}</span>
                </div>
                <h3 className={styles.heading}>{props.heading}</h3>
                <div className={styles.container}>
                    <div className={styles.date}>{props.date}</div>
                    <Link to={link} style={{ textDecoration: 'none' ,color:"black"}}>
                      <button className={styles.view}>View</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product_card