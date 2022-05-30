import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination";
const Products = ({data,setData,trig,setTrig,page,setPage,limit,setLimit,totalpage}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
   <>
  
   <AddProduct trig={trig} setTrig={setTrig} data={data} setData={setData}/>
    <div>{
        data.map((el)=>(
          <Product el={el}/>
        ))
        }
   </div>
      {/* Pagination */}
      <Pagination totalpage={totalpage} trig={trig} setTrig={setTrig} page={page} setPage={setPage} limit={limit} setLimit={ setLimit}/>
   </>
      
  
  );
};

export default Products;
