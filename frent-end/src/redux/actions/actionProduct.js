import axios from "axios"
import { GETPRODUCTS, MYPRODUCTS } from "../actionType/actionTypeProducts"
export const getProducts =() => async(dispatch)=>{
   try {
   const res=await axios.get("http://localhost:8000/product/get")
      dispatch({
        type:GETPRODUCTS,
        payload:res.data
      })
   } catch (error) {
    console.log(error)
   }
}
export const getDetailProduct =(id) => async(dispatch)=>{
  
   try {
   const res=await axios.get("http://localhost:8000/product/detail/"+id)
      dispatch({
        type:GETPRODUCTS,
        payload:res.data
      })
   } catch (error) {
    console.log(error)
   }
}
export const addProduct =(data) => async(dispatch)=>{
   const config={
      headers:{
         token:localStorage.getItem("token")
      }
   }
    try {
    const res=await axios.post("http://localhost:8000/product/add",data,config)
       dispatch(getProducts())
    } catch (error) {
     console.log(error)
    }
 }
 export const deleteproduct =(id) => async(dispatch)=>{
   const config={
      headers:{
         token:localStorage.getItem("token")
      }
   }
   try {
   const res=await axios.delete("http://localhost:8000/product/delete/"+id,config)
      dispatch(getProducts())
   } catch (error) {
    console.log(error)
   }
}
 

export const getproductsuser=()=>async(dispatch)=>{
   const config={
      headers:{
         token:localStorage.getItem("token")
      }
   }
   try {

      const res= await axios.get("http://localhost:8000/product/getmyproduct",config)
      dispatch({
         type:MYPRODUCTS,
         payload:res.data.products
      })
   } catch (error) {
      console.log(error)
   }
}

export const updateproduct =(id,data)=>async (dispatch)=>{
   const config={
      headers:{
         token:localStorage.getItem("token")
      }
   }
   try {
      const res=await axios.put("http://localhost:8000/product/update/"+id,data,config)

dispatch(getproductsuser())

} catch (error) {
console.log(error)
}

}


