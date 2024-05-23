import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import DetailProd from "./components/DetailProd";
import AcceuilUser from "./components/user-vendeur/AcceuilUser";
import ProfilUser from "./components/user-vendeur/ProfilUser";
import AjouterAnnonce from "./components/user-vendeur/AjouterAnnonce";
import MesAnnonces from "./components/user-vendeur/MesAnnonces";
import Securite from "./components/user-vendeur/Securite";
import Boutiques from "./components/Boutiques";
import PanierVendeur from "./components/user-vendeur/PanierVendeur";
import ProdHommeVendeur from "./components/user-vendeur/ProdHommeVendeur";
import ProdFemmeVendeur from "./components/user-vendeur/ProdFemmeVendeur";
import ProdFilleVendeur from "./components/user-vendeur/prodFilleVendeur";
import ProdGarconVendeur from "./components/user-vendeur/prodGarconVendeur";
import ContactVendeur from "./components/user-vendeur/ContactVendeur";
import VoirBoutique from "./components/VoirBoutique";
import ModifProd from "./components/user-vendeur/ModifProd";
import FavorisVendeur from "./components/user-vendeur/FavorisVendeur";
import AllProducts from "./components/user-vendeur/AllProducts";
import Navig from "./components/Home/Navig";
import ExempleUser from "./components/user-vendeur/ExempleUser";
import ProtectedRoute from "./components/ProtectedRoute";
import Commande from "./components/user-vendeur/Commande";
import { useState } from "react";


function App() {
  const [search,setSearch]=useState("")
  return (
    <div>
      <div className="pos1">
      <ExempleUser setSearch={setSearch} /> 
        </div> 
      <div className="pos2">
        <Navig />
        </div> 
      <Routes>
      <Route path="/" element={<AcceuilUser />} /> 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/product-homme" element={<ProdHommeVendeur search={search}/>} />
        <Route path="/product-femme" element={<ProdFemmeVendeur />} />
        <Route path="/product-fille" element={<ProdFilleVendeur />} />
        <Route path="/product-garcon" element={<ProdGarconVendeur />} />
        <Route path="/profil/AjouterAnnonce" element={<ProtectedRoute><AjouterAnnonce /></ProtectedRoute>} />
        <Route path="/profil/Securite" element={<ProtectedRoute><Securite /></ProtectedRoute>} />
        <Route path="/profil/MesAnnonces" element={<ProtectedRoute><MesAnnonces /></ProtectedRoute>} />
        <Route path="/profil/modifier-product" element={<ProtectedRoute><ModifProd/></ProtectedRoute>} />
        <Route path="/profil/panier/" element={<ProtectedRoute><PanierVendeur /></ProtectedRoute>} />
        <Route path="/profil/favoris/" element={<ProtectedRoute><FavorisVendeur /></ProtectedRoute>} />
        <Route path="/profil/commande/" element={<ProtectedRoute><Commande /></ProtectedRoute>} />
       <Route path="/user/contact" element={<ContactVendeur />} />
        <Route path="/boutique" element={<Boutiques />} />
        <Route path="/detail/:id" element={<DetailProd />} /> 
        <Route path="/voirboutique/:id" element={<VoirBoutique />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path='/profil' element={
        <ProtectedRoute>
        <ProfilUser />
        </ProtectedRoute>
        } />
      </Routes>
      <div className="pos2">  <Footer/></div> 
  
      <ToastContainer position='bottom-left'/>
    </div>
  );
}

export default App;
