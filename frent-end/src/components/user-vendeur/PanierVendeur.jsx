import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent, updateuser } from "../../redux/actions/action";
import { getProducts } from "../../redux/actions/actionProduct";
import imglogo from "../../assets/logogt.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function PanierVendeur() {
  const dispatch = useDispatch();

  const msg = useSelector((state) => state.allproducts.msg);
  const products = useSelector((state) => state.allproducts.products);
  const user = useSelector((state) => state.users.user);
  const [commandeVendeur, setCommandeVendeur] = useState(user.commandevendeur || []);
  const [commandeAcheteur, setCommandeAcheteur] = useState(user.commandeachteur || []);
  const [panier, setPanier] = useState(user.panier || []);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getcurrent());
  }, [dispatch]);

  useEffect(() => {
    setPanier(user?.panier || []);
    setCommandeAcheteur(user?.commandeachteur || []);
    setCommandeVendeur(user?.commandevendeur || []);
  }, [user]);

  const removeFromCart = (productId) => {
    const updatedPanier = panier.filter((e) => e._id !== productId);
    setPanier(updatedPanier);
    dispatch(updateuser(user._id, { panier: updatedPanier }));
  };

  const updateCommande = (product) => {
    const updatedCommandeAcheteur = [...commandeAcheteur, product];
    setCommandeAcheteur(updatedCommandeAcheteur);
    dispatch(updateuser(user?._id, { commandeachteur: updatedCommandeAcheteur }));

    const updatedCommandeVendeur = [
      ...commandeVendeur,
      {
        userId: {
          _id: user._id,
          adresse: user.adresse,
          np: user.np,
          phone: user.phone,
        },
        productInfo: product,
      },
    ];
    setCommandeVendeur(updatedCommandeVendeur);
    dispatch(updateuser(product?.userId?._id, { commandevendeur: updatedCommandeVendeur }));
  };

  const handleCommande = () => {
    panier.forEach((e) => updateCommande(e));
    setPanier([]);
    dispatch(updateuser(user?._id, { panier: [] }));
    toast.success("la commande est transferet avec succes")
  };

  return (
    <div>
      <div className="pos2">
        <div className="cont-pro-panier">
          <div className="panier1">
            <h3 style={{ fontFamily: "'URW Chancery L', cursive", marginBottom: "30px" }}>
              Panier ( {user?.panier?.length} )
            </h3>

            {panier.length === 0 ? (
              <div style={{ textAlign: "center" }}>
                <img src={imglogo} alt="Panier vide" style={{ width: "150px", marginBottom: "20px" }} />
                <h4>Votre panier est vide !</h4>
                <p>Parcourir nos Boutiques et découvrez nos meilleures offres!</p>
                <Link to="/boutique">
                  <button className="button">Nos Boutiques</button>
                </Link>
              </div>
            ) : (
              <>
                <hr style={{ color: "red" }} />
                <h5 style={{ color: "red", display: "flex", justifyContent: "space-between" }}>
                  Produits <span>Prix après promotion</span>
                </h5>
                <hr style={{ color: "red" }} />
                {user?.panier?.map((e, index) => (
                  <div key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ width: "100px", height: "80px", margin: "0 20px 20px 30px" }}>
                        <img src={e?.image[0]} style={{ width: "100px", height: "80px" }} alt={e.title} />
                      </div>
                      <div>
                        <h4>{e.title}</h4>
                        <p>
                          publié par le boutique de :<br /> {e?.userId?.nomboutique}
                        </p>
                      </div>
                      <div style={{ flex: 1, textAlign: "right" }}>
                        <h4>{e.promo ? e.price - (e.price * e.promo) / 100 : e.price} dt</h4>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <MdDelete style={{ color: "red", fontSize: "25px", cursor: "pointer" }} />
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
              </>
            )}
          </div>
          <div className="panier2">
            <h3>RÉSUMÉ DU PANIER</h3>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h6>Sous-total</h6>
              <h4>
                {panier.reduce((acc, e) => acc + (e.promo ? e.price - (e.price * e.promo) / 100 : e.price), 0)} dt
              </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h6>Frais de livraison</h6>
              <h4>{panier.length === 0 ? 0 : 7} dt</h4>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h6>Total</h6>
              <h4>
                {panier.length === 0
                  ? 0
                  : panier.reduce((acc, e) => acc + (e.promo ? e.price - (e.price * e.promo) / 100 : e.price), 7)}{" "}
                dt
              </h4>
            </div>
            <button
              className="button"
              style={{ margin: "30px 150px 30px 140px" }}
              onClick={handleCommande}
            >
              Commander
            </button>
           
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default PanierVendeur;
