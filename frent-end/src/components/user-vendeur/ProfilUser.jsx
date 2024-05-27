import React, { useEffect, useState } from 'react';

import ModifierInfo from './ModifierInfo';
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent, updateuser } from '../../redux/actions/action';
import axios from 'axios';

function ProfilUser() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcurrent());
  }, [dispatch]);

  const user = useSelector(state => state.users.user);
  const handellogout = () => {
    dispatch(logout(Navigate));
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", formData);
      const imageUrl = res.data.url;
      dispatch(updateuser(user._id, { image: imageUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      
      <div className="pos2">
        <div
          style={{
            backgroundColor: "#edecea",
            margin: "30px 40px 40px 40px",
            padding: "10px 0 30px 0",
            display: "flex",
            justifyContent: "center",
            gap: "33px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "500px", borderRight: "1px #ccc solid" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={user.image}
                style={{ width: "150px", height: "150px" ,borderRadius:"50%"}}
                alt="User"
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <label htmlFor="file-upload">
                <BsFillPencilFill style={{ color: "blue" }} />
              </label>
              <input
                id="file-upload"
                style={{ display: "none" }}
                type="file"
                onChange={handleFileChange}
              />
              &nbsp;
              {user.np}
            </div>
            <br />
            <div style={{ marginLeft: "80px", lineHeight: "3.0", fontSize: "25px" }}>
              <Link to="/profil/MesAnnonces" className='bg-menu'>
                <RiFolderSharedFill style={{ width: "30px", height: "30px" }} />
                &nbsp;Mon Boutique
              </Link>
              <br />
              <Link to="/profil/AjouterAnnonce" className='bg-menu'>
                <FiFolderPlus style={{ width: "30px", height: "30px" }} />
                &nbsp; Ajouter une annonce
              </Link>
              <br />
              <Link to="/profil" className='bg-menu-p'>
                <LuUser2 style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes informations
              </Link>
              <br />
              <Link to="/profil/commande" className="bg-menu">
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes achats <span className="nb-commande">{user?.commandeachteur?.length}</span>
              </Link>
              <br />
              {user?.commandevendeur?.length!==0 ? <Link to="/profil/achat" className="bg-menu" style={{ position: "relative" }}>
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes commandes <span className="nb-commande">{user?.commandevendeur?.length}</span>
              </Link>:null}
              <Link to="/profil/securite" className='bg-menu'>
                <GrShieldSecurity style={{ width: "30px", height: "30px" }} />
                &nbsp; Sécurité
              </Link>
              <br />
              <Link className='bg-menu'>
                <IoIosLogOut style={{ width: "30px", height: "30px" }} />
                &nbsp; Déconnexion
              </Link>
              <br />
            </div>
          </div>
          <div style={{ width: "900px" }}>
            <h3 style={{ color: "#333", marginLeft: "15px" }}>Mes informations </h3>
            <br /><br />
            <div style={{ marginLeft: "200px" }}>
              <h6>Nom et Prenom : &nbsp;&nbsp;&nbsp; {user.np}</h6>
              <br /><br />
              <h6>Numéro de télèphone : &nbsp;&nbsp;&nbsp; {user.phone}</h6>
              <br /><br />
              <h6>Adresse Personnel: &nbsp;&nbsp;&nbsp; {user.adresse}</h6>
              <br />
              
              <br /><br />
              <ModifierInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilUser;
