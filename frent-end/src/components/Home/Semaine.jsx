import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actionProduct';
import "../../App.css";

function Semaine() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector(state => state.allproducts.products);

  const sortedProducts = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const newProducts = sortedProducts.slice(0, 10);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    }
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        mawWidth: "100vh",
        height: "360px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#edecea",
          width: "220px",
          height: "290px",
          marginLeft: "50px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black ",
          transform: "perspective(600px) rotateY(20deg)",
        }}
      >
        <h1 style={{ color: "red", textAlign: "center" }}>
          <br />
          Produits <br />
          <br />
          de la
          <br />
          <br /> semaine
        </h1>
      </div>
      <div>
      <div style={{ width: "1100px", height: "200px", marginTop: "30px"}}>
      <Carousel responsive={responsive}>
        {newProducts.map(product => (
          <Link to={`/detail/${product._id}`} key={product._id} className="card">
            <img src={product.image[0]} alt={product.title} />
            <h1>{product.price} dt</h1>
            <div className="card__content">
              <p className="card__title">{product.title}</p>
              <p className="card__description">
                {product.description}
              </p>
            </div>
            <div className="card-p" style={{ display: "flex", marginTop: "5px" }}>
              <div>
                <FaRegHeart style={{ fontSize: "25px", color: "red" }} />
              </div>
              &nbsp; &nbsp; &nbsp;
              <div>
                <FiShoppingCart style={{ fontSize: "25px", color: "red" }} />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
      </div>
    </div>
  );
}

export default Semaine;
