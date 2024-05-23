import React, { useEffect } from 'react';
import "../../App.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../../redux/actions/action';
function NosBoutique() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const users = useSelector(state => state.users.boutique);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    }
  };
  return (
    <div>
      <br />
      <br />
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
            Nos <br />
            <br /> Boutiques
          </h1>
        </div>
        <div>
        <div style={{width:"1100px", height:"230px",marginTop:"30px"}}>
      <Carousel  responsive={responsive} >
        {users.filter(e=>e.nomboutique!=="Nom boutique").map(e=>
      <div className='card-boutique' >
        <div className='couverture'>
          <img src={e.couvertureboutique} style={{width:"249px",height:"98px",borderRadius:"20px 20px 0 0 "}}/>
        </div>
        <div className='card-img-boutique'>
       <img src={e.imageboutique} style={{width:"95px",height:"95px",borderRadius:"50%"}}/>
        </div>
        <div className='contenu-boutique'>
        <h6>{e.nomboutique}</h6>
        <div><Link to={`/voirboutique/${e._id}`} style={{color:"#454343",marginLeft:"50px"}}><ImEye style={{width:"40px",height:"40px"}}/></Link></div>
        </div>
      </div>
    )}
      </Carousel>
    </div>
        </div>
      </div>
      <br /> 
    </div>
  );
}

export default NosBoutique;
