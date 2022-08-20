import "./nav.css";
import ReactModal from "react-modal";
import React, { useState } from "react";
import About from './about';
import Settings from './settings';
import Map from './map';

ReactModal.setAppElement('#root');

const Nav = () => {
  const [modalIsOpenAbout, setModalIsOpenAbout] = useState(false);
  const [modalIsOpenSettings, setModalIsOpenSettings] = useState(false);
  const [modalIsOpenMap, setModalIsOpenMap] = useState(false);

  const person = {
    name: "Johan",
  };

  return (
    <div>
      <nav>
      <p className="logo">Hello, {person.name}</p>
        <ul>
          <li>
            <a href="#" onClick={() => setModalIsOpenAbout(true)}>About</a>
          </li>
          <li>
            <a href="#" onClick={() => setModalIsOpenSettings(true)}>Settings</a>
          </li>
          <li>
            <a href="#" onClick={() => setModalIsOpenMap(true)}>Show Map</a>
          </li>
        </ul>
      </nav>
      <ReactModal isOpen={modalIsOpenAbout} onRequestClose={() => setModalIsOpenAbout(false)}>
        <About />
        <button onClick={() => setModalIsOpenAbout(false)}>Close Modal</button>
      </ReactModal>
      <ReactModal isOpen={modalIsOpenSettings} onRequestClose={() => setModalIsOpenSettings(false)}>
        <Settings />
        <button onClick={() => setModalIsOpenSettings(false)}>Close Modal</button>
      </ReactModal>
      <ReactModal isOpen={modalIsOpenMap} onRequestClose={() => setModalIsOpenMap(false)}>
        <Map />
        <button onClick={() => setModalIsOpenMap(false)}>Close Modal</button>
      </ReactModal>
    </div>
  );
};

export default Nav;
