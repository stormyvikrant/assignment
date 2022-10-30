import { AppContext } from "../Context/AppContext";
import {useContext} from "react"
import RestaurantTable from "../Components/RestaurantTable";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Components/Pagination"

const BasseURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?"


const fetchResData =async (page=1)=>{
  let res = await fetch(BasseURL+`page=${page}&limit=10`)
  let resData = await res.json()
  return resData
}



function Dashboard() {

  const {token , logoutUser} = useContext(AppContext)

  const [page , setPage] = useState(1)

  const [alldata , setAlldata] = useState([])

  useEffect(()=>{
    let ResData = fetchResData(page)
    ResData.then((json)=>{
      setAlldata(json)
    }).catch((err)=>{
      console.log(err , "ResData")
    })
  } , [page])

  const logout = ()=>{
    logoutUser()
  }


  const handlePge = (p)=>{
    setPage(p)
  }


  alldata.data ? console.log("loadingDone...") : console.log("loading...")

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
      <button data-testid="logout-btn" onClick={logout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
        <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          <option value="">All</option>
          <option value="">All</option>
          <option value="">All</option>
          <option value="">All</option>
          <option value="">All</option>
        </select>
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        
        {alldata.data ? <RestaurantTable data={alldata}/> : null}

      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={alldata.totalPages} currentPage={page} handlePageChange={(p)=>{handlePge(p)}}/>
      </div>
    </div> 
  );
}

export default Dashboard;
