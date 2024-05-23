import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ImEye } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getusers } from "../redux/actions/action";

function Boutiques() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  const boutique = useSelector((state) => state.users.boutique);

  return (
    <div>
      
      <div className="pos2">
        <h3
          style={{
            fontFamily: "'URW Chancery L', cursive",
            textAlign: "center",
            margin: "30px 0 30px 0",
          }}
        >
          Tous Nos Boutiques
        </h3>
        <div
          style={{
            backgroundColor: "#edecea",
            margin: "0 40px 0 40px ",
            padding: "30px 0 30px 0",
            display: "flex",
            justifyContent: "center",
            gap: "33px",
            flexWrap: "wrap",
          }}
        >
          {boutique.filter(e=>e.nomboutique!=="Nom boutique").map((e) => (
            <div className="card-boutique" key={e._id}>
              <div className="couverture">
                <img
                  src={e.couvertureboutique}
                  style={{ width: "249px", height: "98px", borderRadius: "20px 20px 0 0" }}
                  alt="Couverture de la boutique"
                />
              </div>
              <div className="card-img-boutique">
                <img
                  src={e.imageboutique}
                  style={{ width: "95px", height: "95px", borderRadius: "50%" }}
                  alt="Image de la boutique"
                />
              </div>
              <div className="contenu-boutique">
                <h6 style={{ marginLeft:"30px" }}>{e.nomboutique}</h6>
                <div style={{ margin: "10px 0" }}>
                  <Link to={`/voirboutique/${e._id}`} style={{ color: "#454343", marginLeft: "50px" }}>
                    <ImEye style={{ fontSize:"30px" }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/><br/><br/>
    </div>
  );
}

export default Boutiques;
