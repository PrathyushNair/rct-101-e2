import React from "react";
import style from "../pagination.module.css"
const Pagination = ({page,setPage,trig,setTrig,totalpage,limit,setLimit}) => {
return (
    <div className={style.pagination}>
      <button className={style.btn}onClick={()=>{setPage(1)
      setTrig(!trig)}} data-cy="pagination-first-button">First</button>
      <button className={style.btn}onClick={()=>{setPage(page-1)
      setTrig(!trig)}} data-cy="pagination-previous-button">Previous</button>
      <select className={style.btn}onChange={(e)=>{setLimit(e.target.value)
      setTrig(!trig)}} data-cy="pagination-limit-select">
        <option value={"3"} data-cy="pagination-limit-3">3</option>
        <option value={"6"} data-cy="pagination-limit-6">6</option>
        <option value={"9"}  data-cy="pagination-limit-9">9</option>
      </select>
      <button className={style.btn}onClick={()=>{setPage(page+1)
      setTrig(!trig)}} data-cy="pagination-next-button">Next</button>
      <button className={style.btn} onClick={()=>{setPage(Math.ceil(totalpage/limit))
    setTrig(!trig)}} data-cy="pagination-last-button">Last</button>
    </div>
  );
};

export default Pagination;
