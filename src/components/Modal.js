import React from 'react';
import './styles/Modal.css';

const Modal = () => (
  <aside>
    <div className="modal">
      <div>
        <img className="image" src="world.png" alt="Flag" />
      </div>
      <div>
        <h1>Name</h1>
        <h2>Capital</h2>
        <h2>Continent</h2>
        <h4>Region</h4>
        <h4>Population</h4>
        <h4>Area:</h4>
        <p>Google Maps</p>
      </div>
    </div>
  </aside>
);

export default Modal;
