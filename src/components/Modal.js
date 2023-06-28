import React from 'react';
import './styles/Modal.css';

const Modal = () => (
  <aside>
    <div className="modal">
      <div>
        <img className="image" src="world.png" alt="Flag" />
      </div>
      <ul className="modal-ul">
        <li><h1>Name</h1></li>
        <li><h2>Capital</h2></li>
        <li><h2>Continent</h2></li>
        <li><h4>Region</h4></li>
        <li><h4>Population</h4></li>
        <li><h4>Area:</h4></li>
        <li><p>Google Maps</p></li>
      </ul>
    </div>
  </aside>
);

export default Modal;
