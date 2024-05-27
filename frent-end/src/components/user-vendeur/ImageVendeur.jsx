import React from "react";
import image from "../../assets/images.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import CreerBoutique from "./CreerBoutique";
import { useSelector } from "react-redux";

function ImageVendeur() {
  const user=useSelector(state=>state.users.user)
  const divStyle = {
    cursor: "none", // Enlever le curseur
    position: "absolute",
    top: "70px",
    right: "230px",
  };
console.log(user)
  return (
    <div className="img2">
      <div>
        <img src={image} style={{ width: "800px", height: "300px" }} />
      </div>

      <div style={divStyle}>
        <a
          style={{
            fontSize: "30px",
            fontWeight: "50px",
            fontFamily: "'URW Chancery L', cursive",
          }}
        >
          C'EST LE MOMENT &nbsp;
          <ReactTyped
            strings={[
              "d'avoir une marque".toUpperCase(),
              "de passer à l'action".toUpperCase(),
              "de vendre".toUpperCase(),
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr=""
            loop
          />
        </a>
        <br />
        <br />
        <br />
      </div>
      {user?.np?
        <button
          style={{ position: "absolute", top: "150px", right: "400px" }}
          className="button decal"
        >
        <CreerBoutique />
        </button>:
        <Link to="/log-in">
          <button
          style={{ position: "absolute", top: "150px", right: "400px"}}
          className="button decal"
        >
      Créer Boutique 
        </button>
        </Link>
      }
    </div>
  );
}

export default ImageVendeur;
