import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/actions/actionProduct";
import { getusers } from "../redux/actions/action";

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
function VoirBoutique() {
    const dispatch = useDispatch();
    const { id } = useParams();

    
    useEffect(() => {
        dispatch(getusers());
        dispatch(getProducts());
    }, [dispatch]);

    
    const users = useSelector(state => state.users.boutique)
    const products = useSelector(state => state.allproducts.products)

    
    const boutique = users.find(e => e._id === id);

   
    const productsUser = products.filter(e => e?.userId?._id === boutique._id)

    return (
        <div>
            
            <br />
            <div className="pos2">
                <div style={{ minWidth: "100vh" }}>
                    <div style={{ position: "relative" }}>
                        <img
                            src={boutique?.couvertureboutique}
                            style={{ width: "1300px", height: "250px",marginLeft:"100px" }}
                        />
                        <div style={{ position: "absolute", top: "180px", left: "150px", border: '1px black solid', borderRadius: "50px" }}>
                            <img
                                src={boutique?.imageboutique}
                                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                            />
                        </div>
                       
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h3 style={{ color: "#333", marginLeft: "250px" }}>{boutique?.nomboutique}</h3>
                        <h6 style={{ color: "#333", marginRight: "30px" }}><FaMapMarkerAlt style={{ fontSize: '24px', color: 'black' }}/>{boutique?.adresse }</h6>
                    </div>
                    <br />
                    <div style={{
                        backgroundColor: "#edecea",
                        margin: "0 40px 0 40px",
                        padding: "30px 0",
                        display: "flex",
                        justifyContent: "center",
                        gap: "33px",
                        flexWrap: "wrap",
                    }}>
                        {productsUser.map(product => (
                            <div key={product._id}>
                                <div className="card">
                                    <img src={product.image[0]} alt="product" />
                                    <h1>{product.price}</h1>
                                    <div className="card__content">
                                        <p className="card__title">{product.title}</p>
                                        <p className="card__description">{product.description}</p>
                                    </div>
                                </div>
                                <div className="card-p" style={{
                                    display: "flex",
                                    justifyContent:"space-between",
                                    marginTop: "5px",
                                    border: "1px #edecea solid",
                                }}>
                                   
                                    <h4>{product.price} dt</h4>
                                    <Link to={`/detail/${product._id}`}><FaArrowRight  style={{color:"red",fontSize:"25px"}}/></Link>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br/> <br/> <br/>
        </div>
    );
}

export default VoirBoutique;
