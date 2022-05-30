import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination";
import style from "../Products.module.css"
const Products = ({data,setData,trig,setTrig,page,setPage,limit,setLimit,totalpage}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
   <>
  
   <AddProduct trig={trig} setTrig={setTrig} data={data} setData={setData}/>
    <div className={style.griddiv}>{
        data.map((el)=>(
          <div style={{border:"1px solid blue",width:"40%"}} >
              <Product el={el}/>
          </div>
          
        ))
        }
   </div>
      {/* Pagination */}
      <Pagination totalpage={totalpage} trig={trig} setTrig={setTrig} page={page} setPage={setPage} limit={limit} setLimit={ setLimit}/>
   </>
      
  
  );
};

export default Products;
