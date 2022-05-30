import React from "react";

const Pagination = ({page,setPage,trig,setTrig,totalpage,limit,setLimit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <div>
      <button onClick={()=>{setPage(1)
      setTrig(!trig)}} data-cy="pagination-first-button">First</button>
      <button onClick={()=>{setPage(page-1)
      setTrig(!trig)}} data-cy="pagination-previous-button">Previous</button>
      <select onChange={(e)=>{setLimit(e.target.value)
      setTrig(!trig)}} data-cy="pagination-limit-select">
        <option value={"3"} data-cy="pagination-limit-3">3</option>
        <option value={"6"} data-cy="pagination-limit-6">6</option>
        <option value={"9"}  data-cy="pagination-limit-9">9</option>
      </select>
      <button onClick={()=>{setPage(page+1)
      setTrig(!trig)}} data-cy="pagination-next-button">Next</button>
      <button onClick={()=>{setPage(Math.ceil(totalpage/limit))
    setTrig(!trig)}} data-cy="pagination-last-button">Last</button>
    </div>
  );
};

export default Pagination;
