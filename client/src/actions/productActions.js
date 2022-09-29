import axios from "axios";

export const getAllProducts = () => dispatch => {

    dispatch({type:'GET_PRODUCTS_REQUEST'})//when the func is called this action is dispatched

    axios.get('/api/products/getallproducts').then(res => {
        console.log(res);
        
        dispatch({type:'GET_PRODUCTS_SUCCESS',payload:res.data}) //if operation is success den dispatch the action as suces
    }).catch(err => {
        console.log(err);
        dispatch({type:'GET_PRODUCTS_FAILED',payload:err})//if op failed
    })

}

export const getProductById = (productid) => dispatch => {

    dispatch({type:'GET_PRODUCTBYID_REQUEST'})//when the func is called this action is dispatched

    axios.post('/api/products/getproductbyid',{productid}).then(res => {
        console.log(res);
        
        dispatch({type:'GET_PRODUCTBYID_SUCCESS',payload:res.data}) //if operation is success den dispatch the action as suces
    }).catch(err => {
        console.log(err);
        dispatch({type:'GET_PRODUCTBYID_FAILED',payload:err})//if op failed
    })

}