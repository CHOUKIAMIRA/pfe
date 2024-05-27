import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getcurrent, updateuser } from "../../redux/actions/action";
import { getProducts } from "../../redux/actions/actionProduct";
import imglogo from "../../assets/logogt.png";
import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";
function FavorisVendeur() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allproducts.products);
  const user = useSelector((state) => state.users.user);

  const [favoris, setFavoris] = useState(user.favoris || []);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getcurrent());
  }, [dispatch]);

  useEffect(() => {
    setFavoris(user.favoris || []);
  }, [user.favoris]);

  const removeFromFavoris = (productId) => {
    const updatedFavoris = favoris.filter((item) => item._id !== productId);
    setFavoris(updatedFavoris);
    dispatch(updateuser(user._id, { favoris: updatedFavoris }));
  };


  return (
    <div>
     
      <div className="pos2">
        <h3
          style={{
            fontFamily: "'URW Chancery L', cursive",
            textAlign: "center",
            margin: "30px 0",
          }}
        >
          Liste d'envies ({user?.favoris?.length})
        </h3>
        <div className="cont-pro-panier">
        {favoris.length === 0 ? (
              
              <div style={{ textAlign: "center" }}>
                <img
                  src={imglogo}
                  alt="Liste d'envies vide"
                  style={{ width: "150px", marginBottom: "20px" }}
                />
                <h4>Votre Liste d'envies est vide !</h4>
                <p>Parcourez nos Boutiques et découvrez nos meilleures offres !</p>
                <Link to="/boutique">
                  <button className="button">Nos Boutiques</button>
                </Link>
              </div>
            ):
            favoris.map((e) => (
            <div key={e._id}>
              <div className="card">
                <h6
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {e?.userId?.nomboutique}
                </h6>
                <img
                  src={e.image[0]}
                  alt="product"
                  style={{ height: "150px" }}
                />
                <div style={{ position: "absolute", top: "20px", left: "110px" }}>
                  {e.promo ? (
                    <h5
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "20px",
                        margin: "4px 0 0 25px",
                        padding: "0 5px 0 5px",
                      }}
                    >
                      {e.promo} %
                    </h5>
                  ) : null}
                </div>
                <h5>{e.price} dt</h5>
                <div className="card__content">
                  <p className="card__title">{e.title}</p>
                  <p className="card__description">{e.description}</p>
                </div>
              </div>
              <div
                className="card-p"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "5px",
                  border: "1px #edecea solid",
                }}
              >
              
                  <div>
                  <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => removeFromFavoris(e._id)}
                      >
                        <MdDelete style={{ fontSize: "25px", color: "red" }} />
                      </button>
                      &nbsp; &nbsp;&nbsp;
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => addToCart(e)}
                      >
                        <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
                      </button>
                    </div>
                    <div>
                      <Link to={`/detail/${e._id}`}>detail</Link>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default FavorisVendeur;
