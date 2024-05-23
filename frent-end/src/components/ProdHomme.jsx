import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Exemple from "./Home/Exemple";
import Navig from "./Home/Navig";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actionProduct";
import { getcurrent, updateuser } from "../redux/actions/action";
import { IoMdArrowBack } from "react-icons/io";

function ProdHomme() {
  const dispatch = useDispatch();

  const msg = useSelector((state) => state.allproducts.msg);
  const products = useSelector((state) => state.allproducts.products);
  const user = useSelector((state) => state.users.user);

  const [panier, setPanier] = useState(user.panier || []);
  const [favoris, setFavoris] = useState(user.favoris || []);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getcurrent());
  }, [dispatch]);

  const productshomme = products?.filter((e) => e.categorie === "homme");

  const addToCart = (product) => {
    const updatedPanier = [...panier, product];
    setPanier(updatedPanier);
    dispatch(updateuser(user._id, { panier: updatedPanier }));
  };
  const addToFavoris = (product) => {
    const updatedFavoris = [...favoris, product];
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
          Tous les produits Hommes
        </h3>
        <div className="cont-pro-panier">
          {productshomme?.map((e) => (
            <div key={e._id}>
              <div className="card">
                <h6
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {e.userId.nomboutique}
                </h6>
                <img
                  src={e.image[0]}
                  alt="product"
                  style={{ height: "140px" }}
                />
                <div style = {{position:"absolute",top:"20px",left:"110px"}}> {e.promo ? (
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
                ) : null}</div>
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
                  justifyContent:"space-between",
                  alignItems: "center",
                  marginTop: "5px",
                  border: "1px #edecea solid",
                }}
              >
                <div>
                <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={() => addToFavoris(e)}
                  >
                    <FaRegHeart style={{ fontSize: "25px", color: "red" }} />
                  </button>&nbsp; &nbsp;&nbsp;
                  <button
                    style={{ background: "transparent", border: "none" }}
                    onClick={() => addToCart(e)}
                  >
                    <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
                  </button>
                </div>
              
                <div>
                  
                  <Link
                    to={`/detail/${e._id}`}
                    
                  >
                   detail
                  </Link>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdHomme;
