import { Link } from "react-router-dom"


export function RestaurantCard({id, name, rating, type, price_starts_from}){
    return (
        <tr data-testid="item">
            <td>
              <Link data-testid="name" to={"/restaurants/"+id}> 
            {name}
             </Link>
            </td>
            <td data-testid="rating">
              {rating}
            </td>
            <td data-testid="type">
              {type}
            </td>
            <td data-testid="price">{price_starts_from }
            </td>
        </tr>
    )
}

