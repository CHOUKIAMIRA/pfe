import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../redux/actions/actionProduct';
import product from "../../assets/products/f1.jpg";
import prod1 from "../../assets/products/f2.jpg";
import prod2 from "../../assets/products/f3.jpg";
import prod3 from "../../assets/products/f4.jpg";
import prod4 from "../../assets/products/f5.jpg";
import NavigVendeur from "./NavigVendeur";
import Footer from "../Footer";
import ExempleUser from './ExempleUser';

function DetailProdVendeur() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [selectedImage, setSelectedImage] = useState(product);
  const images = [product, prod1, prod2, prod3, prod4];
  
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  
  const proddetail = useSelector(state => state.allproducts.productDetail);
  const loading = useSelector(state => state.allproducts.loading);
  
  useEffect(() => {
    if (proddetail && proddetail.image) {
      setSelectedImage(proddetail.image);
    }
  }, [proddetail]);

  if (loading || !proddetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div className="pos2">
        <div
          style={{
            backgroundColor: "#edecea",
            margin: "20px 40px 0 40px",
            padding: "20px 30px 30px 30px",
            display: "flex",
            gap: "33px",
            height: "600px"
          }}
        >
          <a>
            <div>
              <img src={selectedImage} alt="Product" style={{ width: "550px", height: "570px" }} />
            </div>
          </a>
          <div style={{ width: "800px", height: "600px" }}>
            <h3
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: "30px 0 30px 30px",
              }}
            >
              {proddetail?.title}
            </h3>
            <h4
              className="animated-title"
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: "30px 0 30px 30px",
              }}
            >
              Prix : {proddetail?.price} dt
            </h4>
            <h4
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: "30px 0 30px 30px",
              }}
            >
              Description
            </h4>
            <p
              style={{
                fontSize: "18px",
                width: "780px",
                lineHeight: "3.0",
                margin: "30px 0 30px 30px",
              }}
            >
              {proddetail?.description}
            </p>
          
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {images.map((image, index) => (
                <a key={index} onClick={() => handleImageClick(image)}>
                  <div style={{ width: "150px", height: "100px" }}>
                    <img src={image} style={{ width: "150px", height: "100px" }} alt={`Product ${index}`} />
                  </div>
                </a>
              ))}
            </div>
            <br />
            <div>
              <button className='button' style={{ marginLeft: "50px" }}>
                Ajouter au panier
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='button' style={{ marginLeft: "50px" }}>
                Ajouter au favoris
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="pos2">
        <Footer />
      </div>
    </div>
  );
}

export default DetailProdVendeur;
