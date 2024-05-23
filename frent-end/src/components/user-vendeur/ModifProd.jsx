import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { BsFillPencilFill } from "react-icons/bs";
import { getproductsuser, updateproduct } from '../../redux/actions/actionProduct';
import axios from "axios"
import { toast } from 'react-toastify';
function ModifProd({ prodId }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(prodId?.title || '');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState(prodId?.description || '');
  const [price, setPrice] = useState(prodId?.price || '');
  const [promo, setPromo] = useState(prodId?.promo || '');
  const [categorie, setCategorie] = useState(prodId?.categorie || '');

  const dispatch = useDispatch();
  const products = useSelector(state => state.allproducts.myproduct);

  useEffect(() => {
    dispatch(getproductsuser());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = async(event) => {

    event.preventDefault();
    const uploadedImageUrls = [];
    try {
      if (images.length>0){
      for (const image of images) {
        const obj = new FormData()
        obj.append("file", image)
        obj.append("upload_preset", "ml_default")
        const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", obj);
        uploadedImageUrls.push(res.data.url)
      }
    dispatch(updateproduct(prodId._id, {
      title,
      description,
      image:uploadedImageUrls,
      price,
      categorie,
      promo,
    }))
  toast.success("le produit a étè modifier avec succés")
  }else{
      dispatch(updateproduct(prodId._id, {
        title,
        description,
        price,
        categorie,
        promo,}))
        toast.success("le produit a étè modifier avec succés")
      }
  
  }
    catch(error){
      toast.error("la modification de produit a étè echoué")
    }
    handleClose();
  }
  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedImages = Array.from(files).slice(0, 5); // Limit to 5 images
    setImages(selectedImages);
  };
  return (
    <div>
      <button style={{ border: "none", background: "transparent" }} onClick={handleShow}>
        <BsFillPencilFill style={{ fontSize: "25px", color: "red" }} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <div style={{ width: "900px" }}>
              <div className="input-container" style={{ width: "400px" }}>
                <input
                  placeholder="Nom du produit"
                  className="input-field"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                />
                <label htmlFor="input-field" className="input-label">
                  promotion
                </label>
                <span className="input-highlight" />
              </div>
              <br />
              <button className='button' style={{ marginLeft: "250px" }} type="submit">
                Modifier
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModifProd;
