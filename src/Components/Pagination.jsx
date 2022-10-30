import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages , currentPage , handlePageChange}) {

  const setPage = (x)=>{
    console.log("Currnet Page " + x)
    handlePageChange(parseInt(x))
  }
 
  let pages = createArrayOfSize(totalPages).map((a , num) => {

    if(parseInt(currentPage) === num+1){
      return <button data-testid="page-btn" key={num+"Pag"} disabled={true} >{num+1}</button>;
    }
    return <button data-testid="page-btn" key={num+"Pag"} onClick={()=>setPage(num+1)}>{num+1}</button>;
  });
  return <div>{pages}</div>;
}
 
export default Pagination;
