import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productActions'
import { getProductByIdReducer } from '../reducers/productReducer'

export default function Productdescscreen() {


  const params = useParams();
  const { productid } = params;

  const dispatch = useDispatch();

  const getProductByIDState = useSelector(state => state.getProductByIdReducer)

  const { product, loading, error } = getProductByIDState

  useEffect(() => {
    dispatch(getProductById(productid))
  }, [])

  return (
    <div>

      {loading ? (<h1>Loading...</h1>) : error ? (<h1>something went wrong</h1>):
        (<div className="row mt-5">
        <div className="col-md-6">
          <div className="card p-2 m-3">
            <h1>{product.name}</h1>
            <img src={product.image} className='img-fluid m-3s big-img' />
            <p>{product.description}</p>
          </div>

        </div>

        <div className="col-md-6">
          <div className='ms-auto selection'>
            <h1>Price : {product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>
            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>
              })}
            </select>

            <hr />

            <button className='btn btn-success'>Add To Cart</button>

          </div>

        </div>

      </div>)
      }

      

    </div>
  )
}
