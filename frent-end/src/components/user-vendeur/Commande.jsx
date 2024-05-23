import React, { useEffect } from 'react';
import { FaRegCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { getusers } from '../../redux/actions/action';
import CommandesAcheteur from './CommandesAchteur';
import CommandesVendeur from './CommandesVendeur';


function Commande() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const user = useSelector(state => state.users.user);
 

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
              <img src={user.image} style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              &nbsp; {user.np}
            </div><br />
            <div style={{ marginLeft: "80px", lineHeight: "3.0", fontSize: "25px" }}>
              <Link to="/profil/MesAnnonces" className='bg-menu'>
                <RiFolderSharedFill style={{ width: "30px", height: "30px" }} />
                &nbsp;Mes annonces
              </Link><br />
              <Link to="/profil/AjouterAnnonce" className='bg-menu'>
                <LuUser2 style={{ width: "30px", height: "30px" }} />
                &nbsp; Ajouter une annonce
              </Link><br />
              <Link to="/profil" className='bg-menu'>
                <FiFolderPlus style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes informations
              </Link><br />
              <Link to="/profil/commande" className="bg-menu-p" style={{ position: "relative" }}>
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes commandes <span className="nb-commande">{user?.commandevendeur?.length}</span>
              </Link> <br />
              <Link to="/profil/securite" className='bg-menu'>
                <GrShieldSecurity style={{ width: "30px", height: "30px" }} />
                &nbsp; Sécurité
              </Link><br />
              <Link className='bg-menu'>
                <IoIosLogOut style={{ width: "30px", height: "30px" }} />
                &nbsp; Déconnexion
              </Link><br />
            </div>
          </div>
          <div style={{ width: "900px" }}>
            <br />
            <h3 style={{ color: "#333", marginLeft: "15px" }}>Vos Commandes</h3><br />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Commandes en tant qu'acheteur</Accordion.Header>
                <Accordion.Body>
                  <CommandesAcheteur />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Commandes en tant que vendeur</Accordion.Header>
                <Accordion.Body>
                  <CommandesVendeur />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commande;
