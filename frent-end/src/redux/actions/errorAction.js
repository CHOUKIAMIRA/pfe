import { ALERTERROR, CLEARERROR } from "../actionType/errorActionType"

export const alert_error= (msg)=>async(dispatch)=>{
const id=Math.random()
dispatch({
    type: ALERTERROR,
    payload: {id,msg}
})
setTimeout(()=>{
    dispatch({
        type: CLEARERROR, 
        payload: id
    })
},3000)
}