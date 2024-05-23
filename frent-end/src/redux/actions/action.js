import axios from "axios"
import { GETBOUTIQUE, GETCURRENT, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../actionType/actionType"
import { alert_error } from "./errorAction"

export const registeruser = (data,navigate)=>async(dispatch)=>{
try {
    const res = await axios.post("http://localhost:8000/register",data)
    
dispatch({
    type:REGISTER,
    payload:res.data
})


    navigate("/"); 


} catch (error) {
   console.log(error) 
   error.response.data.errors.forEach(el => {
    dispatch(alert_error(el.msg))
   });
}
}
export const loginuser = (data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:8000/login",data)
        
        dispatch({
        type:LOGIN,
        payload:res.data
    })
     navigate("/")
       
    } catch (error) {
       console.log(error)
       error.response.data.errors.forEach(el => {
        dispatch(alert_error(el.msg))
       }); 
    }
    }
    export const getcurrent=()=>async(dispatch)=>{
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        try {
            const res=await axios.get("http://localhost:8000/current",config)
            dispatch({
                type: GETCURRENT,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    export const logout =(navigate)=>{
navigate("/")
return {
    type: LOGOUT
}
    }
    export const updateuser = (id, data) => async (dispatch) => {
        const config = {
          headers: {
            token: localStorage.getItem("token"),
          },
        };
        try {
          if (!id) {
            throw new Error("ID utilisateur non défini");
          }
          await axios.put(`http://localhost:8000/update/${id}`, data, config);
          dispatch(getcurrent());
        } catch (error) {
          console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        }
      };
    export const updateuserpassword =(id,data)=>async (dispatch)=>{
        const config={
            headers:{
               token:localStorage.getItem("token")
            }
         }
try {
    await axios.put("http://localhost:8000/updatepassword/"+id,data,config)
   
    dispatch(getcurrent())

} catch (error) {
    console.log(error)
}

    }

    
    export const getusers =() => async(dispatch)=>{
        try {
        const res=await axios.get("http://localhost:8000/boutique")
           dispatch({
             type:GETUSERS,
             payload:res.data
           })
        } catch (error) {
         console.log(error)
        }
     }