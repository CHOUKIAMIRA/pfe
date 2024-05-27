import React, { useEffect, useState } from "react";

import { FaRegCreditCard } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import couverture from "../../assets/Navig/bg-fille.jpg";
import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { getcurrent } from "../../redux/actions/action";
import { deleteproduct, getproductsuser } from "../../redux/actions/actionProduct";
import ModifierBotique from "./ModifierBotique";
import ModifProd from "./ModifProd";

function MesAnnonces() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    dispatch(getcurrent());
  }, [dispatch]);
  
  const user = useSelector((state) => state.users.user);
  const handellogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(getproductsuser());
  }, [dispatch]);
  
  const prodByUser = useSelector((state) => state.allproducts.myproduct);
  
  useEffect(() => {
    setProducts(prodByUser);
  }, [prodByUser]);

  const handleDelete = (id) => {
    dispatch(deleteproduct(id));
    setProducts(products.filter(product => product._id !== id));
  };
const [prodId,setProdId]=useState()
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
          }}
        >
          <div style={{ width: "500px", borderRight: "1px #ccc solid" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={user.image || userImage}
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                alt="User"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              {user.np}
            </div>
            <br />
            <div
              style={{
                marginLeft: "80px",
                lineHeight: "3.0",
                fontSize: "25px",
              }}
            >
              <Link to="/profil/MesAnnonces" className="bg-menu-p">
                <RiFolderSharedFill style={{ width: "30px", height: "30px" }} />{" "}
                &nbsp;Mon Boutique
              </Link>
              <br />
              <Link to="/profil/AjouterAnnonce" className="bg-menu">
                <FiFolderPlus style={{ width: "30px", height: "30px" }} />
                &nbsp; Ajouter une annonce
              </Link>
              <br />
              <Link to="/profil" className="bg-menu">
                <LuUser2 style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes informations
              </Link>
              <br />
              <Link to="/profil/commande" className="bg-menu">
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes achats <span className="nb-commande">{user?.commandeachteur?.length}</span>
              </Link>
              <br />
              {user?.commandeavendeur?.length!==0 ? <Link to="/profil/achat" className="bg-menu" style={{ position: "relative" }}>
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes commandes <span className="nb-commande">{user?.commandevendeur?.length}</span>
              </Link>:null}
              <Link to="/profil/securite" className="bg-menu">
                <GrShieldSecurity style={{ width: "30px", height: "30px" }} />
                &nbsp; Sécurité
              </Link>
              <br />
              <button onClick={handellogout} className='bg-menu' style={{border:"none"}}>
              
                <IoIosLogOut style={{ width: "30px", height: "30px" }} />
                &nbsp; Déconnexion
           
                </button>
              <br />
            </div>
          </div>
          <div style={{ width: "900px"}}>
            <div style={{ position: "relative" }}>
              <img src={user.couvertureboutique || couverture} style={{ width: "900px", height: "200px" }} alt="Couverture" />
              <div style={{ position: "absolute", top: "140px", left: "60px", border: '1px black solid', borderRadius: "50px" }}>
                <img src={user.imageboutique} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt="Boutique" />
              </div> 
            </div> 
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ color: "#333", marginLeft: "190px" }}>{user.nomboutique}</h3>
              <h6>{user.adresseboutique}</h6>
            </div>
            <div style={{ position: "absolute", top: "20px", right: "70px" }}>
              <ModifierBotique/>
            </div>
            <br />
            <div
              style={{
                backgroundColor: "#edecea",
                margin: "0 40px 0 40px",
                padding: "30px 0 30px 0",
                display: "flex",
                justifyContent: "center",
                gap: "33px",
                flexWrap: "wrap",
              }}
            >
              {products.map((e) => (
                <div key={e._id}>
                  <div className="card">
                    <img src={e.image[0]} alt="product" />
                    <h1>{e.price}</h1>
                    <div className="card__content">
                      <p className="card__title">{e.title}</p>
                      <p className="card__description">{e.description}</p>
                    </div>
                  </div>
                  <div
                    className="card-p"
                    style={{
                      display: "flex",
                      marginTop: "5px",
                      border: "1px #edecea solid",
                    }}
                  >
                    &nbsp; &nbsp;{" "}
                    <div>
                      <button style={{ border: "none" }} onClick={() => handleDelete(e._id)}>
                        <MdDelete style={{ fontSize: "25px", color: "red" }} />
                      </button>
                    </div>
                    &nbsp; &nbsp; &nbsp;{" "}
                    <div>
                      <ModifProd prodId={e}/>
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <div>
                      <Link to={`/detail/${e._id}`}>Detail</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default MesAnnonces;
