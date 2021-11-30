import { useState } from "react";

const PetForm = ({ addPet, toggleVisibleForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    species: "",
    sex: "",
    feeding: "",
    medications: false,
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newPet = {
      name: formData.name,
      image: formData.image,
      species: formData.species,
      sex: formData.sex,
      feeding: formData.feeding,
      medications: formData.medications,
    };
    setFormData({
      name: "",
      image: "",
      species: "",
      sex: "",
      feeding: "",
      medications: false,
    });
    fetch("http://localhost:5000/pets", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then(addPet);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pet-content">
      <h4 className="add-pet">Add New Pet</h4>
      <form onSubmit={handleSubmit} className="pet-form">
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="species"
          placeholder="Pet Species"
          onChange={handleChange}
        />

        <input
          type="text"
          name="sex"
          placeholder="Pet Sex"
          onChange={handleChange}
        />

        <input
          type="text"
          name="feeding"
          placeholder="Diet Information"
          onChange={handleChange}
        />

        <input
          type="text"
          name="medications"
          placeholder="Medications"
          onChange={handleChange}
        />
      </form>
      <button
        onClick={() => {
          handleSubmit();
          toggleVisibleForm();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PetForm;
