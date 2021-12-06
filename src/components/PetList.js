import PetCard from "./PetCard";

const PetList = ({ allPets, search, handleDelete }) => {
  return (
    <ul className="pets">
      {allPets
        .filter((pet) => pet.name.includes(search.toLowerCase()))
        .map((pet) => (
          <PetCard pet={pet} key={pet.id} handleDelete={handleDelete} />
        ))}
    </ul>
  );
};

export default PetList;
