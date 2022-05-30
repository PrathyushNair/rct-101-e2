import React from "react";
import Products from "./components/Products"
import axios from "axios"
const App = () => {
  let [data,setData]=React.useState([])
  let [trig,setTrig]=React.useState(false)
  let [page,setPage]=React.useState(1)
  let [limit,setLimit]=React.useState(3)
  let [totalpage,setTotalpage]=React.useState(0)
  React.useEffect(()=>{
    axios.get(` http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((resp)=>{
      setData(resp.data)
      setTotalpage(Number(resp.headers["x-total-count"]))
      console.log(totalpage)
    })
  },[trig])
  return <div>{/* TODO: Code here */}
  <Products totalpage={totalpage}page={page} setPage={setPage} limit={limit} setLimit={ setLimit}trig={trig} setTrig={setTrig} data={data} setData={setData}/>
  </div>;
};

export default App;
