import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default function Product({ product }) {
  return (
    <div>
      <div >
        <Link to={`product/${product._id}`}>
          <img src={product.image} className='img-fluid' />
          <h1>{product.name}</h1>
          <Rating
            style ={{color:'orange'}}
            initialRating={product.rating}
            emptySymbol="fa-regular fa-star fa-1x" 
            fullSymbol="fa fa-thumbs-up fa-1x"
          />
          <h1>Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  )
}
