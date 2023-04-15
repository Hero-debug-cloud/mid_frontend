import styles from "./users.module.css"
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretUp} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import classNames from "classnames";


const Admin_users = () => {
  return (

    <div className={styles.users}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.display}>All Users : 95</h2>
          <div className={styles.search_cont}>
            <input type="text" placeholder="Enter Username" className={styles.inputing}/>
            <div className={styles.search}> 
              <BiSearchAlt2 size={30}/>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.user}>
             <div className={classNames( styles.name,styles.bold)}>Name<AiFillCaretDown/></div>
             <div className={classNames( styles.username,styles.bold)}>Username<AiFillCaretDown/></div>
             <div className={classNames( styles.location,styles.bold)}>location<AiFillCaretDown/></div>
             <div className={classNames( styles.operation,styles.bold)}>
                 Operations
             </div>
          </div>

          <div className={styles.user}>
             <div className={styles.name}>Vinay Chandola</div>
             <div className={styles.username}>herovinay</div>
             <div className={styles.location}>Dehradun</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.name}>Vinay Chandola</div>
             <div className={styles.username}>herovinay</div>
             <div className={styles.location}>Dehradun</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.name}>Vinay Chandola</div>
             <div className={styles.username}>herovinay</div>
             <div className={styles.location}>Dehradun</div>
             <div className={styles.operation}>
                 <div className={styles.edit}><AiFillEdit size={22}/></div>
                 <div className={styles.delete}><AiFillDelete size={22}/></div>
             </div>
          </div>
          <div className={styles.user}>
             <div className={styles.name}>Vinay Chandola</div>
             <div className={styles.username}>herovinay</div>
             <div className={styles.location}>Dehradun</div>
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

export default Admin_users