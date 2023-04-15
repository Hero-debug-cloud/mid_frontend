import { useEffect, useState } from "react";
import styles from "./posting.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";


const Posting = () => {
    

    const [cookies]=useCookies();


  const navigate=useNavigate();


    const [values,setvalues]=useState({
        product_name:"",
        product_type:"",
        product_condition:"",
        product_dis:"",
        price:"",
        product_img:"",
        name:"",
        email:"",
        phoneno:"",
        location:"",
        address:"",
        university:""
    })

    const handlechange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>{
        e.preventDefault();
        setvalues({...values,[e.target.name]:e.target.value});
    }

    //popup
    const success=()=> toast("Post Uploaded");
    const internalerror=()=> toast("Internal Error, Please try Again...");

    const submit=async()=>{
        //posting product 
      await axios.post("/api/product/inserting_product",{
           product_name:values.product_name,
           product_dis:values.product_dis,
           product_img:values.product_img,
           price:values.price,
           category:values.product_type,
           stock:1,
           dis_listarray:[values.product_type,"something",values.product_condition,values.location],
           university:values.university
      },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err){
        internalerror();
      })
      //updating profile of the user;
      
       await axios.post("/api/user/updatinguserfrompost",{
           firstname:values.name,
           email:values.email,
           phoneno:values.phoneno,
           location:values.location,
           address:values.address
       },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} }).catch(function(err){
        internalerror()
       })
      success();
      navigate("/");
    }

    //using useeffect to get previous information of the user that has been saved in the db;
    useEffect(()=>{
       fetching_data();
    },[])
    type userresponse={
        firstname:string,
        email:string,
        phoneno:string,
        location:string,
        address:string
    }
    const fetching_data=async()=>{
        const data=await axios.post("/api/user/getuser",{
        },{ headers: {"Authorization" : `Bearer ${cookies["token"]}`} });
        const realdata:userresponse=data.data;
    

        //setting default values from the db;
        setvalues({...values,name:realdata.firstname,email:realdata.email,phoneno:realdata.phoneno,location:realdata.location,address:realdata.address});
    }
  return (
    <div className={styles.posting}>
        
        <div className={styles.inner}>
            <h1 className={styles.heading}>
                Post your ad now
            </h1>
            <div className={styles.container}>
                <h2 className={styles.head}>
                    Product Details
                </h2>
                <div className={styles.group}>
                    <label htmlFor="title">Product Title</label><br/>
                    <input type="text" placeholder="Enter Title" className={styles.input} name="product_name" onChange={handlechange}/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="type">Product Type</label><br/>
                    <select name="product_type" className={styles.dropdown} onChange={handlechange} value={values.product_type}>
                    <option value="choose">Choose</option>
                    <option value="test">test</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                   </select>
                </div>
                <div className={styles.group}>
                    <label htmlFor="condition">Product Condition</label><br/>
                    <select name="product_condition" className={styles.dropdown} onChange={handlechange}>
                    <option value="choose">Choose</option>
                    <option value="new">Brand New</option>
                    <option value="Used">Used</option>
                   </select>
                </div>
                <div className={styles.group}>
                    <label htmlFor="university">University</label><br/>
                    <select name="university" className={styles.dropdown} onChange={handlechange}>
                    <option value="choose">Choose</option>
                    <option value="Dit University, Dehradun">Dit University, Dehradun</option>
                   </select>
                </div>
                <div className={styles.group}>
                    <label htmlFor="dis">Product Description</label><br/>
                    <textarea name="product_dis" cols={46} rows={8} className={styles.area} onChange={handlechange}>Enter Description</textarea>
                </div>
            </div>

            <div className={styles.container}>
                <h2 className={styles.head}>
                    Set a Price
                </h2>
                <input type="text" placeholder="$" name="price" className={styles.input} onChange={handlechange}/>
            </div>

            <div className={styles.container}>
                <div className={styles.head}>
                    Upload Photo
                </div>
                <input type="file" className={styles.input}/>  {/*need link not image*/} 
            </div>

            <div className={styles.container}>
                <h2 className={styles.head}>Add Your Details</h2>
                <div className={styles.group}>
                    <label htmlFor="name">First Name</label><br/>
                    <input type="text" placeholder="Enter Name" className={styles.input} name="name" onChange={handlechange} value={values.name}/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">Email</label><br/>
                    <input type="text" placeholder="Enter Email" className={styles.input} name="email" onChange={handlechange} value={values.email}/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="number">Phone Number</label><br/>
                    <input type="text" placeholder="Enter Phone Number" className={styles.input} name="phoneno" onChange={handlechange} value={values.phoneno}/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="location">Location</label><br/>
                    <select name="location" className={styles.dropdown} onChange={handlechange} value={values.location}>
                    <option value="choose">Choose</option>
                    <option value="hostel">Hostel</option>
                    <option value="dayscholar">Day Scholar</option>
                   </select>
                </div>
                <div className={styles.group}>
                    <label htmlFor="address">Address</label><br/>
                    <textarea  cols={46} rows={7} className={styles.area} name="address" onChange={handlechange} value={values.address}>Enter Adress</textarea>
                </div>
            </div>


            <button className={styles.post} onClick={submit}>Post Your Ad Now!</button>

        </div>
    </div>
  )
}

export default Posting