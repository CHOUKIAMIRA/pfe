import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from "react-icons/fa6";
import imgback from '../assets/signUp.png';
import "../App.css";

import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../redux/actions/action';
import { toast } from 'react-toastify';
function LogIn() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
  const msg=useSelector(state=>state.users.msg)
  const errors=useSelector(state=>state.errors)
console.log(errors)
  useEffect(() => {
    if (msg) {
      toast.success(msg, {
        className: "toast-dar"
      });

    }
    if (errors.length>0){
      errors.map(e=>
        toast.error(e.msg)
      )
    }
  }, [msg,errors]);
  
  const handlelogin=(e)=>{
  e.preventDefault()
  dispatch(loginuser({email,password},navigate))
}



  const handleClick = () => {
    setShow(!show);
    setHide(!hide);
  };

  return (
    <div className='pos2' >
   <br/>
    <div  style={{ display: "flex"}} >
      <div style={{ width: "800px", height: "700px",marginTop:"10px" }}>
        <img src={imgback} style={{ width: "600px", height: "600px", marginLeft: "60px" }} />
      </div>
      <div style={{
        width: "450px",  height: "500px", marginLeft: "60px",marginTop:"30px",
        boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black "
      }}>
        <br /><br />
        <h3 style={{ marginLeft: "150px" }}>Connexion </h3><br /><br />
        <form >
          <div className="input-container">
            <input placeholder="Email" className="input-field" type="text" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="input-field" className="input-label">
              Email
          </label>
            <span className="input-highlight" />
          </div>
          <br />
          {show ?
            <div className="input-container">
              <input placeholder="Password" className="input-field" type="password" onChange={(e)=>setPassword(e.target.value)}/>
              <label htmlFor="input-field" className="input-label">
                 Password 
            </label>
              <span className="input-highlight"></span>
              <a className="show-hide-password" onClick={handleClick}><FaRegEyeSlash  style={{ color: "black", fontSize: "23px" }} /></a>
            </div> :
            <div className="input-container">
              <input placeholder="Password" className="input-field" type="text" onChange={(e)=>setPassword(e.target.value)}/>
              <label htmlFor="input-field" className="input-label">
                 password
            </label>
              <span className="input-highlight"></span>
              <a className="show-hide-password" onClick={handleClick}><FaRegEye  style={{ color: "black", fontSize: "23px" }} /></a>
            </div>
          }
          
          <br /><br />
          <button className="button" style={{ marginLeft: "150px" }} onClick={handlelogin} >se connecter</button>
          <br/><br/>
            <div  style={{ display: "flex" ,marginLeft:"30px"}}><p>Envie de nous rejoindre ?</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/sign-up"  style={{color:"black"}}>Créer un compte</Link></div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LogIn;
