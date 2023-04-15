import styles from "./order_specific.module.css";

type propstype={
  heading:string,
  dis:string,
  price:string,
  product_img:string
}
const Order_specific = ({heading,dis,price,product_img}:propstype) => {
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
  </div>
  )
}

export default Order_specific