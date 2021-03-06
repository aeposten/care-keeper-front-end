import { useState } from "react";

const PetForm = ({ addPet, toggleVisibleForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    species: "",
    sex: "",
    feeding: "",
  });

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.length > 0 &&
      formData.image.length > 0 &&
      formData.species.length > 0 &&
      formData.sex.length > 0 &&
      formData.feeding.length > 0
    ) {
      const newPet = {
        name: formData.name,
        image: formData.image,
        species: formData.species,
        sex: formData.sex,
        feeding: formData.feeding,
      };
      setFormData({
        name: "",
        image: "",
        species: "",
        sex: "",
        feeding: "",
      });
      fetch("https://care-keeper-back-end.herokuapp.com/pets", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPet),
      })
        .then((response) => response.json())
        .then(addPet);
        toggleVisibleForm();
    } else {
     alert("This field is required!")
    }
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
      <form onSubmit={(e) => handleSubmit(e)} className="pet-form">
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="species"
          placeholder="Pet Species"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="sex"
          placeholder="Pet Sex"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="feeding"
          placeholder="Diet Information"
          onChange={handleChange}
          required
        />
        <p>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>

        <button
          onClick={(e) => {
            toggleVisibleForm();
          }}
        >
          Exit
        </button>
        </p>
      </form>
    </div>
  );
};

export default PetForm;
