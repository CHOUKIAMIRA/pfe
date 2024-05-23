import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Footer from './Footer';
import { getProducts } from '../redux/actions/actionProduct';
import '../App.css';
import { updateuser } from '../redux/actions/action';

function DetailProd() {

  const dispatch = useDispatch();
  const { id } = useParams();
 
  const user=useSelector(state=>state.users.user)
  const [panier, setPanier] = useState(user.panier || []);
  const [favoris, setFavoris] = useState(user.favoris || []);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const detail = useSelector((state) => state.allproducts.products.find(prod => prod._id === id));
  const [selectedImage, setSelectedImage] = useState(detail ? detail.image[0] : '');

  useEffect(() => {
    if (detail) {
      setSelectedImage(detail.image[0]);
    }
  }, [detail]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  const images = detail.image.filter(img => img); // Filter out undefined or null images
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
        <div
          style={{
            backgroundColor: '#edecea',
            margin: '20px 40px 0 40px',
            padding: '20px 30px 30px 30px',
            display: 'flex',
            gap: '33px',
            height: '600px',
          }}
        >
          <div>
            <img src={selectedImage} alt="Product" style={{ width: '550px', height: '570px' }} />
          </div>
          <div style={{ width: '800px', height: '600px' }}>
            <h3>publiée par le boutique de: {detail?.userId?.np}</h3>
            <h3
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: '30px 0 30px 30px',
              }}
            >
              {detail?.title}
            </h3>
            <h4
              className="animated-title"
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: '30px 0 30px 30px',
              }}
            >
              Prix : {detail?.price}dt
            </h4>
            <h4
              style={{
                fontFamily: "'URW Chancery L', cursive",
                margin: '30px 0 30px 30px',
              }}
            >
              Description
            </h4>
            <p
              style={{
                fontSize: '18px',
                width: '780px',
                lineHeight: '3.0',
                margin: '30px 0 30px 30px',
              }}
            >
              {detail.description}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {images.map((image, index) => (
                <div key={index} onClick={() => handleImageClick(image)} style={{ width: '150px', height: '100px' }}>
                  <img src={image} style={{ width: '150px', height: '100px' }} alt={`Product ${index}`} />
                </div>
              ))}
            </div>
            <br />
            {user.np?<div>
           
              <button className="button" style={{ margin: '50px' }} onClick={() => addToCart(detail)}>
                Ajouter au panier
              </button>
            
             
              <button className="button" style={{ margin: '50px' }} onClick={() => addToFavoris(detail)}>
                Ajouter au favoris
              </button>
             
            </div>: <div>
              <Link to="/log-in">
              <button className="button" style={{ margin: '50px' }} >
                Ajouter au panier
              </button>
              </Link>
              <Link to="/log-in">
              <button className="button" style={{ margin: '50px' }} >
                Ajouter au favoris
              </button>
              </Link>
            </div>}
          </div>
        </div>
      </div>
      <br />
      
    </div>
  );
}

export default DetailProd;
