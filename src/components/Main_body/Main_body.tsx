import { useEffect, useState } from "react";
import Product_card from "../Product_card/Product_card";
import styles from "./main_body.module.css"
import {AiFillCaretLeft} from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";
import axios from "axios";
import Main_filter from "../Main_filter/Main_filter";

const Main_body = () => {


  // min and max;
  type filtertype={
    min:string,
    max:string
  }
  //max and min price;
  const [filterprice,setfilterprice]=useState<filtertype>({
    min:"0",
    max:"999"
  })

    //category name;
    const [category,setcategory]=useState("test");

    const changeCategory=(e: React.ChangeEvent<HTMLSelectElement>)=>{
          setcategory(e.target?.value);
    }

    //diplaying card in the frontend;
    const [datas,setdata]=useState([]);
    const [limit,setlimit]=useState(6);
    const [skip,setskip]=useState(0);
    const [fixedskip,setfixedskip]=useState(6);

    //as to load products which are related to default products;
    useEffect(()=>{
       fetching_data();
    },[category,skip,filterprice])

    const fetching_data=async()=>{
        const data=await axios.post("/api/product/findby_category",{
            category:category,
            limit:limit,
            skip:skip,
            min:filterprice.min,
            max:filterprice.max
        })

        setdata(data.data);

    }


    //page count ,prev and next page function
    const [count,setcount]=useState(1);
    const prev=()=>{
      if(count>1){
        setcount(prev=>prev-1);
        setskip(prev=>prev-fixedskip);

      }
    }
    const next=()=>{
      setcount(prev=>prev+1);
      setskip(prev=>prev+fixedskip);
    }

    type displaying={
        _id:string,
        price:string,
        product_name:string,  
        category:string,
        product_img:string,
        time:string
    }
    const price=(min:string,max:string)=>{
      setfilterprice({min:min,max:max});
    }
  return (
   <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.left}>
             <h2 className={styles.filter_heading}>
                Filter
             </h2>
             <div className={styles.filter_cont}>


                {/* change the max and min values  :: cuurently working on it */}
                <Main_filter change={price}/>
             </div>    
        </div>
        <div className={styles.right}>
            <h1 className={styles.uni_name}>dit university, dehradun</h1>
            <div className={styles.category_cont}>
                <div className={styles.category_name}>{category}</div>
                <div className={styles.sorting}>
                   <span className={styles.sort_heading}> Sort by: </span>
                   <select name="category" className={styles.cate_dropdown} onChange={changeCategory}>
                    <option value="test">test</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                   </select>
                </div>
            </div>


            {/* Product Cards */}

            <div className={styles.product_cont}>
                {
                    datas.map((value:displaying)=>{
                        return <Product_card product_id={value._id} price={value.price} heading={value.product_name}  category={category} date={value.time} product_img={value.product_img}/>
                    })
                }
                
            </div>
            {/* //page no. to change the content  */}
            <div className={styles.page_cont}>
                    <div className={styles.page_left} onClick={prev}><AiFillCaretLeft/></div>
                    <span className={styles.count}>{count}</span>
                    <div className={styles.page_right} onClick={next}><AiFillCaretRight/></div>
                </div>
        </div>
      </div>
   </div>
  )
}

export default Main_body