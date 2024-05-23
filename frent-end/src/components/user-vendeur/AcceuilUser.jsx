import React from "react";


import Semaine from "../Home/Semaine";

import Marque from "../Home/Marque";
import "../../App.css";

import Hero from "../Home/Hero";
import Promotion from "../Home/Promotion";
import NosBoutique from "../Home/NosBoutique";

import ImageVendeur from "./ImageVendeur";
function AcceuilUser() {
  
  return (
    <div>
      
      <div className="pos3">
        <ImageVendeur />
      </div>
      <div className="pos2">
        <Hero />
      </div>
      <div className="pos2">
        <Semaine />
      </div>

      <div className="pos2">
        <Marque />
      </div>
      <div className="pos2">
        <Promotion />
      </div>
      <div className="pos2">
        <NosBoutique />
      </div>
      
    </div>
  );
}

export default AcceuilUser;
