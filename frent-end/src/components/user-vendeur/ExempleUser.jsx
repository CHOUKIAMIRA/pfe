import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import imgLogo from "../../assets/logofripy.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent, logout } from "../../redux/actions/action";
function ExempleUser({setSearch}) {
  const dispatch= useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getcurrent())
  }, [])
  const user=useSelector(state=>state.users.user)
  const handellogout=()=>{
    dispatch(logout(navigate))
  }
 

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !imgRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const dropdownRef = useRef(null);
  const imgRef = useRef(null);
    
  return (

    <div>
      { user.np? <div className="container-navbar">
        <div className="logo">
          <Link to="/" className="navbar-brand">
            <img
              src={imgLogo}
              alt="logo"
              style={{ width: "170px", height: "100px" }}
            />
          </Link>
        </div>
        <div className="search">
        <div className="searchbar">
  <div className="searchbar-wrapper">
    <div className="searchbar-left">
      <div className="search-icon-wrapper">
        <span className="search-icon searchbar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
      </div>
    </div>
    <div className="searchbar-center">
      <div className="searchbar-input-spacer" />
      <input
        type="text"
        onChange={(e)=> setSearch(e.target.value)}
        className="searchbar-input"
        maxLength={2048}
        name="q"
        autoCapitalize="off"
        autoComplete="off"
        title="Search"
        role="combobox"
        placeholder="recherche"
      />
    </div>
    <div className="searchbar-right">
      <svg
        className="voice-search"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#4285f4"
          d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
        ></path>
        <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
        <path
          fill="#fbbc05"
          d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
        ></path>
        <path
          fill="#ea4335"
          d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
        ></path>
      </svg>
    </div>
  </div>
</div>

</div>
<div className="panier" >
        <div>
            <Link to="/user/contact" className="heart-icon" title="Contacter nous">
              <BiMessageRounded style={{ fontSize: "25px", color: "red" }} />
            </Link>
            <span className="tooltip">Contacter nous</span>
          </div>
&nbsp;&nbsp;
          <div >
            <Link to="/profil/favoris" className="heart-icon" title="favoris">
              <FaRegHeart  style={{ fontSize: "25px", color: "red" }} />
            </Link>
            <span className="tooltip">favoris</span>
          </div>
          &nbsp;&nbsp;
          <div>
            <Link to="/profil/panier" className="heart-icon" title="panier">
              <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
            </Link><span className="tooltip">panier</span>
            <span className="nb-panier">{user?.panier?.length}</span>
          </div>

        

        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "250px",
            height: "50px",
            position: "relative",
          }}
        >
          <div>
            <h6>{user.np}</h6>
          </div>
          <div onClick={toggleDropdown} ref={imgRef}>
          <a>
              <img src={user.image} style={{ width: "50px", height: "50px" ,borderRadius:"50%"}} />
            </a>
            
          </div>
        </div>
        {isDropdownVisible && (
          <div
          ref={dropdownRef}
            style={{
              position: "absolute",
              left: "1230px",
              top: "80px",
              width: "240px",
              height: "350px",
              border: "1px #edecea solid",
              backgroundColor: "#edecea",
              borderRadius: "7px",
            }}
          >
            <div style={{display:"flex",alignItems:"center"}}>
                <RiFolderSharedFill style={{width:"30px",height:"20px"}}/>
                <Link to="/profil/MesAnnonces" style={{textDecoration:"none"}}><h6 style={{textAlign:"center",padding:"10px 0 0 10px",color:"black"}}>Mon Boutique</h6></Link>
            </div>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <FiFolderPlus style={{width:"30px",height:"20px"}}/>
               <Link to="/profil/AjouterAnnonce" style={{textDecoration:"none",color:"black"}}><h6 style={{textAlign:"center",paddingLeft:"10px"}}>Ajouter une annonce</h6></Link> 
            </div>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <LuUser2 style={{width:"30px",height:"20px"}}/>
                <Link to="/profil" style={{textDecoration:"none",color:"black"}}><h6 style={{textAlign:"center",paddingLeft:"10px"}}>Mes informations</h6></Link>
            </div>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <FaRegCreditCard  style={{width:"30px",height:"20px"}}/>
                <Link to="/profil/commande" style={{textDecoration:"none",color:"black"}}><h6 style={{textAlign:"center",paddingLeft:"10px"}}>Mes commandes</h6></Link>
            </div>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <GrShieldSecurity style={{width:"30px",height:"20px"}}/>
                <Link to="/profil/securite" style={{textDecoration:"none",color:"black"}}><h6 style={{textAlign:"center",paddingLeft:"10px"}}>Sécurité</h6></Link>
            </div>
            <hr/>
            <div style={{display:"flex",alignItems:"center"}}>
                <IoIosLogOut style={{width:"30px",height:"20px"}}/>
                <Link style={{textAlign:"center",textDecoration:"none",paddingLeft:"10px",color:"black"}} onClick={handellogout}>Déconnexion</Link>
            </div>
            
          </div>
        )}
      </div>:
      <div className="container-navbar">
      <div className="logo">
        <Link to="/" className="navbar-brand">
          <img
            src={imgLogo}
            alt="logo"
            style={{ width: "170px", height: "100px" }}
          />
        </Link>
      </div>
      <div className="search">
      <div className="searchbar">
<div className="searchbar-wrapper">
  <div className="searchbar-left">
    <div className="search-icon-wrapper">
      <span className="search-icon searchbar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </span>
    </div>
  </div>
  <div className="searchbar-center">
    <div className="searchbar-input-spacer" />
    <input
      type="text"
      onChange={(e)=> setsearch(e.target.value)}
      className="searchbar-input"
      maxLength={2048}
      name="q"
      autoCapitalize="off"
      autoComplete="off"
      title="Search"
      role="combobox"
      placeholder="recherche"
     
    />
  </div>
  <div className="searchbar-right">
    <svg
      className="voice-search"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285f4"
        d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
      ></path>
      <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
      <path
        fill="#fbbc05"
        d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
      ></path>
      <path
        fill="#ea4335"
        d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
      ></path>
    </svg>
  </div>
</div>
</div>

</div>
      <div className="panier" >
      <div>
          <Link to="user/contact" className="heart-icon" title="Contacter nous">
            <BiMessageRounded style={{ fontSize: "25px", color: "red" }} />
          </Link>
          <span className="tooltip">Contacter nous</span>
        </div>
&nbsp;&nbsp;
        <div >
          <Link to="log-in" className="heart-icon" title="favoris">
            <FaRegHeart  style={{ fontSize: "25px", color: "red" }} />
          </Link>
          <span className="tooltip">favoris</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <Link to="/log-in" className="heart-icon" title="panier">
            <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
          </Link><span className="tooltip">panier</span>
          
        </div>

      

      </div>
      <div className="logsign">
       <Link to="/sign-up" ><button className="log-sign sign">Sign Up</button></Link>
       <Link to="/log-in" ><button className="log-sign log">Log In</button></Link>
      </div>
      </div>
        }
    </div>
  );
}

export default ExempleUser;
