import {  GETPRODUCTS, MYPRODUCTS} from "../actionType/actionTypeProducts"

const initialState = {
  
    products:[],
    msg:"",
    myproduct:[]
}

export const productreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPRODUCTS:
    return { ...state, products:payload.allproducts,msg:payload.msg }

  case MYPRODUCTS:
  return {...state,myproduct:payload}
  
  
  
  default:
    return state
  }
}
