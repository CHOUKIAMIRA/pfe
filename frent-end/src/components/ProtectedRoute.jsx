import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getcurrent } from "../redux/actions/action";

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch();
    let location =useLocation()
    const user=useSelector(state=>state.users.user)
    
    const [isUserChecked, setIsUserChecked] = useState(false);
    useEffect(() => {
        dispatch(getcurrent()).then(() => setIsUserChecked(true));
      }, [dispatch])
    
  
if (!isUserChecked ){
    return (
    <div style={{fontSize:"4rem"}}>Loading...</div>
    )
}

if (!user.np) {
    return <Navigate to="/log-in" state={{from:location}} replace/>
}
  return children
} 
export default ProtectedRoute;