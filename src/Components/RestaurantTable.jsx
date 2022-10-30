import { RestaurantCard } from "./RestaurantCard"


function RestaurantTable({ data }) {

   
    return (
        <table border="1px" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Type</th>
                   <th>Price Starts From</th>
                </tr>
            </thead>
            <tbody>
                {data.data ? data.data.map(({ id, name, rating, type, price_starts_from }) => {
                    return <RestaurantCard
                        name={name}
                        rating={rating}
                        type={type}
                        price_starts_from={ price_starts_from }
                        id={id}
                        key = {id+"SignRest"}

                    />
                }) : null}
            </tbody>
        </table>
    )
}

export default RestaurantTable

