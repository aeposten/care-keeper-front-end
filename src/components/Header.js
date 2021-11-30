import NavBar from "./Navbar";

const Header = ({ search, handleSearch, addPet }) => {
  return (
    <>
      <NavBar search={search} handleSearch={handleSearch} addPet={addPet} />
    </>
  );
};

export default Header;
