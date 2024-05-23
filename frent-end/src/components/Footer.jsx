import React from "react";
import imgLogo from "../assets/logogt.png";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
function footer() {
  return (
    <div>
   
    <div style={{ minWidth:"100vh",display: "flex",gap:"95px",backgroundColor:"#edecea" }}>
      <div style={{ width: "450px"}}>
        <div style={{ marginTop:"30px",marginLeft:"100px" }}><img src={imgLogo} alt="" style={{ width: "370px", height: "100px" }} /></div><br/><br/>
        <div style={{marginLeft:"185px" }}><PiFacebookLogoLight className="iconefit"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <PiInstagramLogoLight className="iconefit"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CiTwitter className="iconefit"/></div>
      </div>
      <div style={{marginTop:"20px" }}>
        <p style={{color:"red",fontSize:"23px" }}>SERVICE CLIENT</p><br/>
        <a>FAQ</a><br/><br/>
        <a>Termes et Conditions</a><br/><br/>
        <a>Votre Compte</a><br/><br/>
        <a>Vos Achats</a><br/><br/>
        </div>
      <div style={{marginTop:"20px" }}>
        <p style={{color:"red",fontSize:"23px" }}>A PROPOS</p><br/>
        <a>A Propos de Fripy.tn</a><br/><br/>
        <a>Contactez-nous</a><br/><br/>
       
      </div>
      <div style={{marginTop:"20px" }}>
        <p style={{color:"red",fontSize:"23px" }}>CATEGORIES</p><br/>
        <a>Hommes</a><br/><br/>
        <a>Femmes</a><br/><br/>
        <a>Filles</a><br/><br/>
        <a>Garçons</a><br/><br/>
      </div>
      <div style={{marginTop:"20px" }}>
        <p style={{color:"red",fontSize:"23px" }}>GAGNEZ DE L’ARGENT</p><br/>
        <a>Vendez sur Fripy.tn</a><br/><br/>
        <a>Créez un compte</a><br/><br/>
        
      </div>
    </div>
    <div className="text-center">
      <p className="fs-9 text-secondary-light mb-0">
        Copyright © {new Date().getFullYear()} Fripy. All Rights Reserved
      </p>
    </div>
    </div>
  );
}

export default footer;
