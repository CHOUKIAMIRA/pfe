import React from 'react';
import { useSelector } from 'react-redux';

const CommandesAcheteur = () => {
  const user = useSelector(state => state.users.user);

  if (!user.commandeachteur || user.commandeachteur.length === 0) {
    return <p>Aucune commande en tant qu'acheteur.</p>;
  }

  return (
    <div>
      <h4>Commandes en tant qu'acheteur</h4>
      <ul>
        {user.commandeachteur.map((e, index) => 
          <li key={index}>
            <p>Produit : {e.title}</p>
            <p>Prix : {e.price} DT</p>
            <p>Image : {e.image}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CommandesAcheteur;
