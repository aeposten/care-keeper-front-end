import React, { useState } from "react";
import PetInfo from "./PetInfo";

export default function PetCard({ pet, handleDelete }) {
  const [infoVisible, setInfoVisible] = useState(false);


  const toggleVisibleModal = () => {
    setInfoVisible(!infoVisible);
  };


  return (
    <div className="pet-list">
      <li onClick={toggleVisibleModal}>
        <img src={pet.image} alt={pet.name} className="pet-pic" />
        <h4 className="pet-name">{pet.name}</h4>
      </li>

      {infoVisible && (
        <>
          <div className="overlay" onClick={toggleVisibleModal}></div>
          <PetInfo
            className="pet-info-modal"
            pet={pet}
            handleDelete={handleDelete}
            toggleVisibleModal={toggleVisibleModal}
          />
        </>
      )}
    </div>
  );
}
