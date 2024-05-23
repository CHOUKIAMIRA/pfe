import React, { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent, updateuser } from "../../redux/actions/action";
import { getProducts } from "../../redux/actions/actionProduct";
import imglogo from "../../assets/logogt.png"
import { Link } from "react-router-dom";
function PanierVendeur() {

  const dispatch = useDispatch();

  const msg = useSelector((state) => state.allproducts.msg);
  const products = useSelector((state) => state.allproducts.products);
  const user = useSelector((state) => state.users.user);
  const [commandevendeur, setcommandevendeur] = useState(user.commandeVendeur|| []);
  const [commandeachteur, setcommandeachteur] = useState(user.commandeachteur || []);
  const [panier, setPanier] = useState(user.panier || []);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getcurrent());
  }, [dispatch]);

  useEffect(() => {
    setPanier(user.panier || []);
  }, [user.panier]);

  const removeFromCart = (productId) => {
    const updatedPanier = panier?.filter((e) => e._id !== productId);
    setPanier(updatedPanier);
    dispatch(updateuser(user._id, { panier: updatedPanier }));
  };
  const updatecommande = (product) => {
    const date = new Date();
    const updatedcommandeachteur = [...commandeachteur, product];
    setcommandeachteur(updatedcommandeachteur);
    dispatch(updateuser(user._id, { commandeachteur: updatedcommandeachteur }));
  
    const updatedcommandevendeur = [
      ...commandevendeur,
      {
        userId: {
          _id: user._id,
          adresse: user.adresse,
          np: user.np,
          phone: user.phone
        },
        productInfo: product
      }
    ];
    setcommandevendeur(updatedcommandevendeur);
    dispatch(updateuser(product.userId._id, { commandevendeur: updatedcommandevendeur }));
    setSuccessMessage("La commande a été envoyée avec succès");
    setTimeout(() => {
      setSuccessMessage("");
    }, 9000);
  
  };
  
  return (
    <div>
      
      <div className="pos2">
        <div className="cont-pro-panier">
          <div className="panier1">
            <h3
              style={{
                fontFamily: "'URW Chancery L', cursive",
                marginBottom: "30px ",
              }}
            >
              Panier ( {user?.panier?.length} )
            </h3>
            <hr />
            {user?.panier?.length === 0 ? 
              <div style={{ textAlign: "center" }}>
                <img src={imglogo} alt="Panier vide" style={{ width: "150px", marginBottom: "20px" }} />
                <h4>Votre panier est vide !</h4>
                <p>Parcourir nos Boutiques et découvrez nos meilleures offres!</p>
               <Link to="/boutique"> <button className="button" >
                  Nos Boutiques
                </button></Link>
              </div>
             : 
            user?.panier?.map((e, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      
                      width: "100px",
                      height: "80px",
                      margin: "0 20px 20px 30px",
                    }}
                  >
                   <img src={e?.image[0]}  style={{
                      
                      width: "100px",
                      height: "80px",
                      
                    }}/>
                  </div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>publié par le boutique de : {e?.userId?.nomboutique}</p>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <h4>{e.promo!==0 || e.promo !== null ?e.price-((e.price * e.promo )/100 ): e.price}</h4>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p
                        style={{ textDecoration: "line-through", marginTop: "5px" }}
                      >
                        {e.price} dt
                      </p>
                      <div style={{ backgroundColor: "#ccc", marginLeft: "30px" }}>
                        {e.promo !==0 || e.promo!==null ? e.promo: e.price} %
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MdDelete style={{ color: "red", fontSize: "25px", cursor: 'pointer' }} />
                  <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={() => removeFromCart(e._id)}
                  >
                    Supprimer
                  </button>
                </div>
                <hr />
              </div>         
            ))}
          </div>
          <div className="panier2">
            {" "}
            RÉSUMÉ DU PANIER
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h6>Sous-total</h6>
              <h4>{user?.panier?.reduce((acc,e)=>acc+e.price-((e.price * e.promo )/100 ),0)} dt</h4>
            </div>
          
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h6>Frais de livraison</h6>
              <h4>{user?.panier?.length === 0
    ? 0
    : 7
  } dt</h4>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h6>Total</h6>
              <h4>
  {user?.panier?.length === 0
    ? 0
    : user?.panier?.reduce((acc, e) => acc + (e.price - (e.price * e.promo) / 100), 7)
  } dt
</h4>
            </div>
            <button
              className="button"
              style={{ margin: "30px 150px 30px 140px" }}
              onClick={(e)=>panier.map(e=>updatecommande(e))}
            >
              Commander
            </button>
            <span>{successMessage}</span>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  );
}

export default PanierVendeur;
