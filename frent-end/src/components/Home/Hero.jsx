import React from 'react';
import orders from '../../assets/icons/icon1.png';
import orders1 from '../../assets/icons/icon2.png';
import orders2 from '../../assets/icons/icon3.png';
import orders3 from '../../assets/icons/icon4.png';
import orders4 from '../../assets/icons/icon5.png';

const Hero = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "60px" ,marginTop:"30px",marginBottom:"70px"}}>
      <div className='divimg3'>
        <img src={orders} className="img3" />
        <div>
          <p className='divimagp'>Commandes rapides</p>
        </div>
      </div>

      <div className='divimg3'>
        <img src={orders1} className="img3" />
        <div>
          <p className='divimagp'>Expédition rapide</p>
        </div>
      </div>
      
      <div className='divimg3'>
        <img src={orders2} className="img3" />
        <div>
          <p className='divimagp'>Sauvegardes élevées</p>
        </div>
      </div>
      
      <div className='divimg3'>
        <img src={orders3} className="img3" />
        <div>
          <p className='divimagp'> Assistance 24h/24 &nbsp;&nbsp;et 7j/7</p>
        </div>
      </div>

      <div className='divimg3'>
        <img src={orders4} className="img3" />
        <div>
          <p className='divimagp'>Commandes en ligne</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
