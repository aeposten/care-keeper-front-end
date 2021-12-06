import PetCard from "./PetCard";

const PetList = ({ allPets, search, handleDelete }) => {
  return (
    <ul className="pets">
      {allPets
        .filter((pet) => {
          petName = pet.name;
          petName.toLowerCase().includes(search);
        })
        .map((pet) => (
          <PetCard pet={pet} key={pet.id} handleDelete={handleDelete} />
        ))}
    </ul>
  );
};

export default PetList;
