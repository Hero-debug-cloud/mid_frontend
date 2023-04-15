import styles from "./main_slider.module.css";
import main_img from "../../assets/frontend.png"
import { Link } from "react-router-dom";

const Main_Slider = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.main_heading}>
          Buy & Sell anything in your University campus
        </h1>
        <Link to="/posting" style={{ textDecoration: 'none' ,color:"black"}}>
           <button className={styles.buy}>Start Selling !</button>
        </Link>
        
      </div>
      <div className={styles.right}>
        <img src={main_img} alt="this is main img" className={styles.main_img}/>
      </div>
    </div>
  );
};

export default Main_Slider;
