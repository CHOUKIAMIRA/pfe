import React, { useEffect, useState } from "react";

import imgback from "../assets/signUp.png";
import { Link } from "react-router-dom";

import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { registeruser } from "../redux/actions/action";
import { toast } from 'react-toastify';
function SignUp() {
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[np,setNp]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [phone, setPhone] = useState("");
  const [adresse, setAdresse] = useState("");
  
const handlesignUp=(e)=>{
  e.preventDefault()//eviter le refraiche de la page
  dispatch(registeruser({np,email,password,phone,adresse,
    nomboutique:"Nom boutique",
    adresseboutique:"Adresse boutique",
    image:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
    imageboutique:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuyHyd74d7kXcdaA-stHwTUGrFZmtKxdQ9ZxEeXgrTg&s",
    couvertureboutique:"https://static.doofinder.com/main-files/uploads/2020/03/Captura-de-pantalla-2020-03-11-a-las-11.28.49-e1583922702185.png"
  },navigate))
  
}
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
  return (
    <div className="pos2">
    <br/>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div
          style={{
            width: "500px",
            marginTop: "30px",
            height: "760px",
            marginLeft: "180px",
            boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black ",
          }}
        >
          <br />

          <h3 style={{ marginLeft: "150px" }}>Créez un compte </h3>
          <br />

          <form>
          <div className="input-container">
              <input
                placeholder="Nom & Prénom"
                className="input-field"
                type="text"
                onChange={(e)=>setNp(e.target.value)}
               
              />
              <label htmlFor="input-field" className="input-label">
                Nom & Prénom *
              </label>
              <span className="input-highlight" />
            </div>
            <br/>
            <div className="input-container">
              <input
                placeholder="Email"
                className="input-field"
                type="text"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Email
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Password"
                className="input-field"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Password
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            
           
            <div className="input-container">
              <input
                placeholder="Adresse"
                className="input-field"
                type="text"
                onChange={(e)=>setAdresse(e.target.value)}
               
              />
              <label htmlFor="input-field" className="input-label">
                Adresse *
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container">
              <input
                placeholder="Numéro de téléphone"
                className="input-field"
                type="text"
                onChange={(e)=>setPhone(e.target.value)}
               
              />
              <label htmlFor="input-field" className="input-label">
                Numéro de téléphone *
              </label>
              <span className="input-highlight" />
            </div>
            
           
            <br />
            <br />
            <button className="button" style={{ marginLeft: "150px" }} onClick={handlesignUp}>
              S'inscrire
            </button>
            <br />
            <br />
            <div style={{ display: "flex", marginLeft: "30px" }}>
              <p>Vous avez déjà un compte ?</p>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/log-in" style={{ color: "black" }}>
                Me connecter
              </Link>
            </div>
          </form>
          
        </div>

        <div style={{ width: "800px", height: "700px" }}>
          <img
            src={imgback}
            style={{ width: "600px", height: "600px", marginLeft: "140px" }}
          />
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  );
}

export default SignUp;
