import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Exemple from "./Home/Exemple";
import Navig from "./Home/Navig";
import product from "../assets/products/f1.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actionProduct";

function ProdFille() {
  const dispatch=useDispatch()
  const msg=useSelector(state=>state.allproducts.msg)
  const products=useSelector(state=>state.allproducts.products)
  const productsfille=products.filter(e=>e.categorie==="fille")
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
 
  console.log(products,msg)
  return (
    <div>
      <div className="pos1">
        <Exemple />
      </div>
      <div className="pos2">
        <Navig />
      </div>
      <div className="pos2">
        <h3
          style={{
            fontFamily: "'URW Chancery L', cursive",
            textAlign: "center",
            margin: "30px 0 30px 0",
          }}
        >
          Tous les produits Enfans & BéBé Filles
        </h3>
        <div className="cont-pro-panier">
          {productsfille?.map((e) => (
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

export default ProdFille;
