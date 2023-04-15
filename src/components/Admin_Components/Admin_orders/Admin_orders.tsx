import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./orderes.module.css";
import classNames from "classnames";
import { AiFillCaretDown, AiFillDelete, AiFillEdit } from "react-icons/ai";

const Admin_orders = () => {

  return (
    <div className={styles.orders}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.display}>All Orders : 52</h2>
          <div className={styles.search_cont}>
            <input type="text" placeholder="Enter Username" className={styles.inputing}/>
            <div className={styles.search}> 
              <BiSearchAlt2 size={30}/>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.order}>
             <div className={classNames( styles.product_name,styles.bold)}>Product Name<AiFillCaretDown/></div>
             <div className={classNames( styles.price,styles.bold)}>Price<AiFillCaretDown/></div>
             <div className={classNames( styles.time,styles.bold)}>Time Left<AiFillCaretDown/></div>
             <div className={classNames( styles.operation,styles.bold)}>
                 Operations
             </div>
          </div>

          <div className={styles.order}>
             <div className={styles.product_name}>Laptop</div>
             <div className={styles.price}>999</div>
             <div className={styles.time}>2hr</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.order}>
             <div className={styles.product_name}>Laptop</div>
             <div className={styles.price}>999</div>
             <div className={styles.time}>2hr</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.order}>
             <div className={styles.product_name}>Laptop</div>
             <div className={styles.price}>999</div>
             <div className={styles.time}>2hr</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.order}>
             <div className={styles.product_name}>Laptop</div>
             <div className={styles.price}>999</div>
             <div className={styles.time}>2hr</div>
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

export default Admin_orders