import "./nav.css";
import ReactModal from "react-modal";
import React, { useState } from "react";

ReactModal.setAppElement('#root');

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const person = {
    name: "Johan",
  };

  return (
    <div>
      <nav>
      <p className="logo">Hello, {person.name}</p>
        <ul>
          <li>
            <a href="#" onClick={() => setModalIsOpen(true)}>About</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Show Map</a>
          </li>
        </ul>
      </nav>
      <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>About Modal</h2>
        <p>This app is created for everyone struggling withbreaking your addiction...</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </ReactModal>
    </div>
  );
};

export default Nav;
