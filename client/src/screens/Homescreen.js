import React from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import { getAllProductsReducer } from '../reducers/productReducer'



export default function Homescreen() {


  const getAllProductsState = useSelector(state => state.getAllProductsReducer)
  const { loading, products, error } = getAllProductsState
  const dispatch = useDispatch();

  useEffect(() => {

    //calling action creator from useeff hock
    dispatch(getAllProducts())

  }, [])


  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          products.map(product=>{
              return <div className='col-md-3 m-2 p-2'>
                  <Product product={product}/>
                </div>
          })
        )}

      </div>


    </div>
  )
}


