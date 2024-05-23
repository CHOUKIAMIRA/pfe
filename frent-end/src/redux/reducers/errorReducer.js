import { ALERTERROR, CLEARERROR } from "../actionType/errorActionType"

const initialState = []

export const error_reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return [ ...state, payload ]
    case CLEARERROR:
        return state=state.filter(e=>e.id!==payload)
    
  default:
    return state
  }
}
