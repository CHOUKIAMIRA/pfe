import React, { useEffect, useState } from 'react'

import { FaRegCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent , updateuserpassword } from '../../redux/actions/action';

function Securite() {
  const [password, setPassword] = useState('')
    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [msg, setMsg] = useState('')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
  },[dispatch])
const user=useSelector(state=>state.users.user)
const submitHandler = (e) => {
  e.preventDefault();
  if(newpassword===password){
    dispatch(updateuserpassword(user._id, {newpassword,oldpassword}));
  }else{
setMsg("le mot de passe n'est pas egaux")
  }
 setTimeout(()=>setMsg(""),3000)
};
  return (
    <div>
     
      <div className="pos2">  
      <div
          style={{
            backgroundColor: "#edecea",
            margin: "30px 40px 40px 40px ",
            padding: "10px  0 30px 0 ",
            display: "flex",
            justifyContent: "center",
            gap: "33px",
            flexWrap: "wrap",
          }}>
            <div style={{width:"500px",borderRight:"1px #ccc solid"}}>
            <div style={{textAlign:"center"}}><img src={user.image} style={{ width: "150px", height: "150px",borderRadius:"50%" }} /></div>
            <div style={{textAlign:"center"}}>
           &nbsp;
              {user.np}
              </div><br/>
              <div style={{marginLeft:"80px",lineHeight:"3.0",fontSize:"25px"}}>
              <Link to="/profil/MesAnnonces" className='bg-menu' ><RiFolderSharedFill style={{width:"30px",height:"30px"}}/> &nbsp;Mes annonces</Link><br/>
              <Link to="/profil/AjouterAnnonce" className='bg-menu'><LuUser2 style={{width:"30px",height:"30px"}}/>&nbsp; Ajouter une annonce</Link><br/>
              <Link to="/profil" className='bg-menu'><FiFolderPlus style={{width:"30px",height:"30px"}}/>&nbsp; Mes informations</Link><br/>
             
              <Link to="/profil/commande" className="bg-menu">
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes commandes
              </Link> <br />
              <Link to="/profil/securite" className='bg-menu-p'><GrShieldSecurity style={{width:"30px",height:"30px"}}/>&nbsp; Sécurité</Link><br/>
              <Link className='bg-menu'><IoIosLogOut style={{width:"30px",height:"30px"}}/>&nbsp; Déconnexion</Link><br/>
              </div>
              
            </div>
            <div style={{width:"900px"}}>
                <br/>
              <h3 style={{color:"#333",marginLeft:"15px"}}>Changer Mot de passe </h3>
              <form onSubmit={submitHandler}>
              <br/>
              <div className="input-container" style={{width:"400px"}}>
                <input
                  placeholder="Ancien Mot de passe"
                  className="input-field"
                  type="text"
                  onChange={(e)=>setOldPassword(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
              Ancien Mot de passe
                </label>
                <span className="input-highlight" />
              </div>
               <br/>
              <div className="input-container" style={{width:"400px"}}>
                <input
                  placeholder=" Nouveau Mot de passe"
                  className="input-field"
                  type="text"
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Nouveau Mot de passe
                </label>
                <span className="input-highlight" />
              </div>
              <br/>
              <div className="input-container" style={{width:"400px"}}>
                <input
                  placeholder="Confirmer Mot de passe"
                  className="input-field"
                  type="text"
                  onChange={(e)=>setNewPassword(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Confirmer Mot de passe
                </label>
                <span className="input-highlight" />
              </div>
              <br/>
               <span>{msg}</span>
              <button className='button' style={{marginLeft:"250px"}} variant="danger" onClick={submitHandler} >
        Confirmer
      </button>
           
      </form>  
              

            </div>
          </div>
        </div>
    </div>
  )
}

export default Securite