import { useState } from "react"
import { useEffect } from "react"
import {useParams} from "react-router-dom"

const BasseURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com"


const fetchResData =async (id)=>{
  let url = `/mockapi/getrestaurants/${id}`
  let res = await fetch(BasseURL+url)
  let resData = await res.json()
  return resData
}





function RestaurantPage() {


  const [singleData , setSingleData] = useState({})

  const {id} = useParams();
  console.log(id)

  useEffect(()=>{
    let ResData = fetchResData(id)
    ResData.then((json)=>{
      console.log(json)
      setSingleData(json)
    }).catch((err)=>{
      console.log(err , "SingRestPage")
    })
  } , [])



  return (




    <div data-testid="restaurant-container">
      <div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={singleData.data?singleData.data.image:null}/>
      </div>
        <h4 data-testid="restaurant-name">{singleData.data?singleData.data.name:null}</h4>
      </div>
      <div data-testid="restaurant-type">Type: {singleData.data?singleData.data.type:null}</div>
      <div data-testid="restaurant-rating">Rating: {singleData.data?singleData.data.rating:null}</div>
      <div data-testid="restaurant-votes">Votes: {singleData.data?singleData.data.number_of_votes:null}</div>
      <div data-testid="restaurant-price">Starting Price: {singleData.data?singleData.data.price_starts_from:null}</div>
      
    </div>
  );
}
export default RestaurantPage;
