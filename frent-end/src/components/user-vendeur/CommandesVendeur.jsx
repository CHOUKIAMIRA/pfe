import React from 'react';
import { useSelector } from 'react-redux';

const CommandesVendeur = () => {
  const user = useSelector(state => state.users.user);
  

  if (user.commandevendeur.length === 0) {
    return <p>Aucune commande en tant que vendeur.</p>;
  }

  return (
    <div>
      <h4>Commandes en tant que vendeur</h4>
      <ul>
        {user.commandevendeur.map(e => 
          <li >
            <p>Nom de l'acheteur : {e.userId.np}</p>
            <p>Adresse de l'acheteur : {e.userId.adresse}</p>
            <p>Téléphone de l'acheteur : {e.userId.phone}</p>
            <p>Produit : {e?.productInfo.title}</p>
            <p>Prix : {e?.productInfo?.price} DT</p>
           
          </li>
        )}
      </ul>
    </div>
  );
};

export default CommandesVendeur;
