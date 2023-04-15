import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import styles from "./main_filter.module.css"
import { useState } from "react"

type propstype={
  change:Function
}

const Main_filter = ({change}:propstype) => {

    //which part to show;
    const [show,setshow]=useState(false);

    const [min,setmin]=useState("0");
    const [max,setmax]=useState("999");

  function handlemin(event:React.ChangeEvent<HTMLInputElement>){
    setmin(event.target.value);
  }
  function handlemax(event:React.ChangeEvent<HTMLInputElement>){
    setmax(event.target.value);
  }
  const submit=()=>{
    change(min,max);
  }
  return (
    <div className={styles.filter}>
        <div className={styles.container}>
          <h2 className={styles.filter_name}>Price</h2>
           <div className={styles.icon} onClick={()=>{setshow(prev=>!prev)}} style={{cursor:"pointer"}}>
            {show?<AiFillCaretUp/>:<AiFillCaretDown/>}
            </div>
        </div>

        {
            show?<>
            <div className={styles.min_cont}>
                  <span className={styles.symbol}>$</span>
                  <input type="text" placeholder="Min" className={styles.min} value={min} name="min" onChange={handlemin}/>
            </div>
            <div className={styles.max_cont}>
                  <span className={styles.symbol}>$</span>
                  <input type="text" placeholder="Max" className={styles.max} value={max} name="max" onChange={handlemax}/>
            </div>
            <button className={styles.price_btn} onClick={submit}>Go</button>
            </>:<></>
        }

        
        
       
    </div>
  )
}

export default Main_filter