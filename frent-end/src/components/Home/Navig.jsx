import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../App.css";
import { Link } from "react-router-dom";

function Navig() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "red" }}>
        <Container>
        
        <Nav className="me-auto">
          <Link to="/boutique" className="nav3">Nos Boutiques</Link>
          </Nav>

          <Nav className="me-auto">
          <Link to="/All-products" className="nav3">Tous nos prosuits</Link>
          </Nav>

          <Nav className="me-auto">
          <Link to="/product-homme" className="nav3">Homme</Link>
          </Nav>

          <Nav className="me-auto">
          <Link to="/product-femme" className="nav3">Femme</Link>
          </Nav>
          
          <Nav className="me-auto">
          <Link to="/product-garcon" className="nav3">Enfants & Bébé Garçon</Link>
          </Nav>

          <Nav className="me-auto">
          <Link to="/product-fille" className="nav3">Enfants & Bébé Fille</Link>
          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navig;
