import React, { useEffect, useState } from 'react';
import { FaRegCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiFolderSharedFill } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent, logout } from '../../redux/actions/action';
import axios from 'axios';
import { addProduct } from '../../redux/actions/actionProduct';
import { toast } from 'react-toastify';

function AjouterAnnonce() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [promo, setPromo] = useState(0);
  const [categorie, setCategorie] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcurrent());
  }, [dispatch]);

  const user = useSelector(state => state.users.user);
  const msg = useSelector(state => state.allproducts.msg);

  const handellogout = () => {
    dispatch(logout());
  };
console.log(msg)
  

  const handleSubmit = async () => {
    const uploadedImageUrls = [];
    try {
      for (const image of images) {
        const obj = new FormData();
        obj.append("file", image);
        obj.append("upload_preset", "ml_default");
        const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", obj);
        uploadedImageUrls.push(res.data.url);
      }
     if(title && images.length && price && description && promo && categorie){
      dispatch(addProduct({ title, image: uploadedImageUrls, price, description, promo, categorie }));
      toast.success("Le noveau produit a été ajouter avec succées", {
        className: "toast-dar"
      });
    }else{
      toast.error("tous les champs sont obligatoires", {
        className: "toast-dar"
      });
    }
      setTitle("");
      setImages([]);
      setDescription("");
      setPrice(0);
      setCategorie("");
      setPromo(0);
      
    } catch (error) {
      toast.error("Erreur lors du téléchargement de l'image", {
        className: "toast-dar"
      });
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedImages = Array.from(files).slice(0, 5); // Limit to 5 images
    setImages(selectedImages);
  };

  return (
    <div>
      
      <div className="pos2">
        <div
          style={{
            backgroundColor: "#edecea",
            margin: "30px 40px 40px 40px ",
            padding: "10px  0 30px 0 ",
            display: "flex",
            justifyContent: "center",
            gap: "33px",
            flexWrap: "wrap",
          }}>
          <div style={{ width: "500px", borderRight: "1px #ccc solid" }}>
            <div style={{ textAlign: "center" }}>
              <img src={user.image} style={{ width: "150px", height: "150px",borderRadius:"50%" }} alt="user" />
              </div>
            

            <div style={{ textAlign: "center" }}>
              &nbsp;
              {user.np}
            </div><br />
            <div style={{ marginLeft: "80px", lineHeight: "3.0", fontSize: "25px" }}>
              <Link to="/profil/MesAnnonces" className='bg-menu'><RiFolderSharedFill style={{ width: "30px", height: "30px" }} />&nbsp;Mon Boutique</Link><br />
              <Link to="/profil/AjouterAnnonce" className='bg-menu-p'><LuUser2 style={{ width: "30px", height: "30px" }} />&nbsp; Ajouter une annonce</Link><br />
              <Link to="/profil" className='bg-menu'><FiFolderPlus style={{ width: "30px", height: "30px" }} />&nbsp; Mes informations</Link><br />
              
              <Link to="/profil/commande" className="bg-menu" style={{ position: "relative" }}>
                <FaRegCreditCard style={{ width: "30px", height: "30px" }} />
                &nbsp; Mes commandes <span className="nb-commande">{user?.commandevendeur?.length}</span>
              </Link><br/>
              <Link to="/profil/securite" className='bg-menu'><GrShieldSecurity style={{ width: "30px", height: "30px" }} />&nbsp; Sécurité</Link><br />
              <Link className='bg-menu' onClick={handellogout}><IoIosLogOut style={{ width: "30px", height: "30px" }} />&nbsp; Déconnexion</Link><br />
            </div>
          </div>
          <div style={{ width: "900px" }}>
            <h3 style={{ color: "#333", marginLeft: "15px" }}>Ajouter une annonce </h3>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <input
                placeholder="Nom du produit"
                className="input-field"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Nom du produit
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <input
                placeholder="Description de produit"
                className="input-field"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Description de produit
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <input
                placeholder="Prix de produit"
                className="input-field"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Prix de produit
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{images.length > 0 ? `${images.length} image(s) sélectionnée(s)` : "Ajouter des images (max 5)"}</p>&nbsp;&nbsp;&nbsp;
              <div className="input-container" style={{ width: "400px" }}>
                <label htmlFor="file-upload" style={{
                  cursor: "pointer",
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "red",
                  color: "#fff",
                  borderRadius: "5px"
                }}>
                  choisir un fichier
                </label>
                <input id="file-upload" style={{ display: "none" }} type="file" multiple accept="image/*" required  onChange={handleImageChange} />
                <span className="input-highlight" />
              </div>
            </div>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <select className="input-field" required value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                <option value="" disabled hidden>Sélectionnez une catégorie</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="fille">Enfants & Bébé Fille</option>
                <option value="garcon">Enfants & Bébé Garçon</option>
              </select>
              <label htmlFor="input-field" className="input-label">
                Catégorie
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <input
                placeholder="promotion *"
                className="input-field"
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                promotion *
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <button className='button' style={{ marginLeft: "250px" }} variant="danger" onClick={handleSubmit} >
              Ajouter l'annonce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AjouterAnnonce;
