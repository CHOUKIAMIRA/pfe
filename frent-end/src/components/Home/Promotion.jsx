import React from 'react'
import promo from "../../assets/promo.jpg";
import { Link } from 'react-router-dom';

function Promotion() {
  return (

<div style={{width:"1100px",
  height:"300px",
  marginTop:"30px",
  marginLeft:"215px",backgroundImage: `url(${promo})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

<h1 style={{marginLeft:"550px",paddingTop:"30px"}}> Produits à -50% et plus !  </h1><br/>
<h3 style={{marginLeft:"500px"}}>Découvrez nos offres spéciales dans l'annonce</h3>
<br/><br/>

<Link to="/user">
<button className='button' style={{marginLeft:"700px",backgroundColor:"black"}}>découvrir</button>
</Link>
</div>
  )
}

export default Promotion