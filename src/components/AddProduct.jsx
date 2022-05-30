import React from "react";
import styles from "../Addproduct.module.css"
const AddProduct = ({data,setData,trig,setTrig}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  let [showform,setShowform]=React.useState(false)
  let [formdata,setFormdata]=React.useState({imageSrc:"https://picsum.photos/seed/picsum2/421/261",title:"",category:"",gender:"",price:""})
  let producthandle=()=>{
    setShowform(!showform)
  }
  let handlechange=(e)=>{
      setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  let handlesubmit=(e)=>{
    e.preventDefault()
    if(formdata.imageSrc!==""&&formdata.gender!==""&&formdata.category!==""&&formdata.price!==""&&formdata.title!=="")
    {
      fetch(`  http://localhost:8080/products`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)}).then((resp)=>(resp.json())).then((resp)=>{
          setData([...data,resp])
          console.log(data)
          setTrig(!trig)
        })
    }
    else{
      alert("empty filed detected")
    }
    setShowform(!showform)
  
  }
  return (
    <div className={styles.addprod}>
      <button className={styles.btn} onClick={producthandle} data-cy="add-product-button">Add new product</button>
      { showform ? <div>
              <form onSubmit={handlesubmit}>
        
        <input onChange={handlechange} name="title" value={formdata.title} placeholder="Add product title" data-cy="add-product-title" />
        <select onChange={handlechange} name="category"  data-cy="add-product-category">
          <option>Select Category</option>
          <option value="Shirt" data-cy="add-product-category-shirt">Shirts</option>
          <option value="Pant" data-cy="add-product-category-pant">Pants</option>
          <option value="jeans" data-cy="add-product-category-jeans">Jeans</option>
        </select>
        <div  data-cy="add-product-gender">Gender
          <label> Male<input onChange={handlechange} name="gender" value={"Male"} type="radio" data-cy="add-product-gender-male"></input></label>
          <label>Female<input onChange={handlechange} name="gender" value={"Female"} type="radio" data-cy="add-product-gender-female"></input></label>
          <label>Unisex<input onChange={handlechange} name="gender" value={"Unisex"} type="radio" data-cy="add-product-gender-unisex"></input></label>
        </div>
        <label>Product price<input onChange={handlechange} value={formdata.price} name="price" placeholder="Add Price" data-cy="add-product-price" /></label>
        <button  data-cy="add-product-submit-button">Submit</button>
      
    </form>
      </div>: <></>}
      
      
    </div>
  );
};

export default AddProduct;
