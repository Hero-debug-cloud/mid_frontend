import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretUp} from "react-icons/ai";
import {BiSearchAlt2} from "react-icons/bi";
import styles from "./products.module.css";
import classNames from "classnames";

const Admin_products = () => {
  return (
    <div className={styles.users}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.display}>All Products : 95</h2>
          <div className={styles.search_cont}>
            <input type="text" placeholder="Enter Username" className={styles.inputing}/>
            <div className={styles.search}> 
              <BiSearchAlt2 size={30}/>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.user}>
             <div className={classNames( styles.product_name,styles.bold)}>Product Name<AiFillCaretDown/></div>
             <div className={classNames( styles.price,styles.bold)}>Price<AiFillCaretDown/></div>
             <div className={classNames( styles.seller_name,styles.bold)}>Seller Name<AiFillCaretDown/></div>
             <div className={classNames( styles.operation,styles.bold)}>
                 Operations
             </div>
          </div>

          <div className={styles.user}>
             <div className={styles.product_name}>Vinay Chandola</div>
             <div className={styles.price}>999</div>
             <div className={styles.seller_name}>herovinay</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.product_name}>Vinay Chandola</div>
             <div className={styles.price}>999</div>
             <div className={styles.seller_name}>herovinay</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.product_name}>Vinay Chandola</div>
             <div className={styles.price}>999</div>
             <div className={styles.seller_name}>herovinay</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.product_name}>Vinay Chandola</div>
             <div className={styles.price}>999</div>
             <div className={styles.seller_name}>herovinay</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Admin_products