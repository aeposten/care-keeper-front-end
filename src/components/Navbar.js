import Search from "./Search";
import PetForm from "./PetForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ search, handleSearch, addPet }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleVisibleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <nav>
        <ul className="nav">
          <Link className="title" to="/">
            <li className="title">Care Keeper</li>
          </Link>
          <li onClick={toggleVisibleForm}>Add a Pet </li>
          <Link to="/resources">
            <li>Resources</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>
            <Search search={search} handleSearch={handleSearch} />
          </li>
        </ul>
      </nav>
      {formVisible && (
        <>
          <div className="overlay" onClick={toggleVisibleForm}>
            {" "}
          </div>
          <PetForm className="pet-info-modal" addPet={addPet} toggleVisibleForm={toggleVisibleForm} />
        </>
      )}
    </>
  );
};

export default NavBar;
