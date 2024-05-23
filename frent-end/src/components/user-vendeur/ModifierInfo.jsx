import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent, updateuser } from '../../redux/actions/action';

function ModifierInfo() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
  },[])
  const user=useSelector(state=>state.users.user)
const [np,setNp]=useState(user.np)
const [phone,setPhone]=useState(user.phone)
const [adresse,setAdresse]=useState(user.adresse)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate= ()=>{
    dispatch (updateuser(user._id, {id:user._id, np, phone, adresse})) 
   handleClose()
   }
  return (
    <div>
      <Button className='button' style={{marginLeft:"50px"}} variant="danger" onClick={handleShow} >
        Modifier mes informations
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier mes informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        
              <div className="input-container" style={{width:"400px"}}>
                <input
                  defaultValue={user.np}
                  className="input-field"
                  type="text"
                  onChange={(e)=>setNp(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Nom & Prénom
                </label>
                <span className="input-highlight" />
              </div>
<br/>
              <div className="input-container" style={{width:"400px"}}>
                <input
                 defaultValue={user.phone}
                  className="input-field"
                  type="text"
                  onChange={(e)=>setPhone(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Numéro de télèphone
                </label>
                <span className="input-highlight" />
              </div>
              <br/>
              
             
              <div className="input-container" style={{width:"400px"}}>
                <input
                 defaultValue={user.adresse}
                  className="input-field"
                  type="text"
                  onChange={(e)=>setAdresse(e.target.value)}
                  required
                />
                <label htmlFor="input-field" className="input-label">
                Adresse 
                </label>
                <span className="input-highlight" />
              </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button className='button' variant="danger" onClick={handleUpdate}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModifierInfo;
