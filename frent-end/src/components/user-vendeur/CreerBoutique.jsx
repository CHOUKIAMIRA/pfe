import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent, updateuser } from '../../redux/actions/action';
import axios from 'axios'; // Importez axios pour effectuer des requêtes HTTP

function CreerBoutique() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcurrent());
  }, [dispatch]);

  const user = useSelector(state => state.users.user);

  const [adresseboutique, setAdresseboutique] = useState(user.adresseboutique);
  const [nomboutique, setNomboutique] = useState(user.nomboutique);
  const [imageboutique, setImageboutique] = useState(user.imageboutique);
  const [couvertureboutique, setCouvertureboutique] = useState(user.couvertureboutique);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", formData);
      const imageUrl = res.data.url;
      setImageboutique(imageUrl); // Mettez à jour l'état de l'image de profil
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleCouvertureChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/djpsbuswk/upload", formData);
      const imageUrl = res.data.url;
      setCouvertureboutique(imageUrl); // Mettez à jour l'état de l'image de couverture
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleUpdate = () => {
    dispatch(updateuser(user._id, {
      adresseboutique,
      nomboutique,
      imageboutique,
      couvertureboutique,
    }));
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className='button' onClick={handleShow}>
      {user?.nomboutique==="Nom boutique"? "Créer":"Modifier" } Boutique
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Boutiques</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="input-container" style={{ width: "400px" }}>
              <input
                defaultValue={user.nomboutique}
                className="input-field"
                type="text"
                onChange={(e) => setNomboutique(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Nom de boutique
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div className="input-container" style={{ width: "400px" }}>
              <input
                defaultValue={user.adresseboutique}
                className="input-field"
                type="text"
                onChange={(e) => setAdresseboutique(e.target.value)}
                required
              />
              <label htmlFor="input-field" className="input-label">
                Adresse de boutique
              </label>
              <span className="input-highlight" />
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{imageboutique ? imageboutique.name : "Ajouter une image de profil"}</p>&nbsp;&nbsp;&nbsp;
              <div className="input-container" style={{ width: "400px" }}>
                <label htmlFor="file-upload-profile" style={{
                  cursor: "pointer",
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "black",
                  color: "#fff",
                  borderRadius: "5px"
                }}>
                  Choisir une photo de profil
                </label>
                <input id="file-upload-profile" style={{ display: "none" }} type="file" required onChange={handleImageChange} />
                <span className="input-highlight" />
              </div>
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{couvertureboutique ? couvertureboutique.name : "Ajouter une image de couverture"}</p>&nbsp;&nbsp;&nbsp;
              <div className="input-container" style={{ width: "400px" }}>
                <label htmlFor="file-upload-cover" style={{
                  cursor: "pointer",
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "black",
                  color: "#fff",
                  borderRadius: "5px"
                }}>
                  Choisir une photo de couverture
                </label>
                <input id="file-upload-cover" style={{ display: "none" }} type="file" required onChange={handleCouvertureChange} />
                <span className="input-highlight" />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='button' variant="danger" onClick={handleUpdate}>
            Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreerBoutique;
