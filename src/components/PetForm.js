import { useState } from "react";
import { useForm } from "react-hook-form";

const PetForm = ({ addPet, toggleVisibleForm }) => {
  const { register, watch, errors } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    species: "",
    sex: "",
    feeding: "",
    medications: false,
  });

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
    fetch("https://care-keeper-back-end.herokuapp.com/pets", {
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
      <form onSubmit={(e) => handleSubmit(e)} className="pet-form">
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          ref={...register( "name", { required: true })}
          onChange={handleChange} required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          ref={...register("image",{ required: true })}
          onChange={handleChange} required
        />

        <input
          type="text"
          name="species"
          placeholder="Pet Species"
          ref={...register("species", { required: true })}
          onChange={handleChange} required
        />

        <input
          type="text"
          name="sex"
          placeholder="Pet Sex"
          ref={...register("sex", { required: true })}
          onChange={handleChange} required
        />

        <input
          type="text"
          name="feeding"
          placeholder="Diet Information"
          ref={...register("feeding", { required: true })}
          onChange={handleChange} required
        />

        <input
          type="text"
          name="medications"
          placeholder="Medications"
          onChange={handleChange}
        />

      <button
        onClick={(e) => {
          handleSubmit(e);
          toggleVisibleForm();
        }}
      >
        Submit
      </button>
      <br />
        {errors.name && <span>This field is required</span>}
        <br />
      </form>
    </div>
  );
};

export default PetForm;
