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
  const handleFormError = (errs, invalidateForm) => {
    let errs = {};
    this.refs.form.inputs.forEach((input) => {
      if (input.showRequired()) {
        errs[input.props.name] =
          typeof input.props.validationError === "string"
            ? input.props.validationError
            : "This field is required";
      }
    });
    invalidateForm(errs);
  };
  return (
    <div className="pet-content">
      <h4 className="add-pet">Add New Pet</h4>
      <form
        onSubmit={handleSubmit}
        className="pet-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          onChange={handleChange}
          onFormError={handleFormError}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          onFormError={handleFormError}
        />

        <input
          type="text"
          name="species"
          placeholder="Pet Species"
          onChange={handleChange}
          onFormError={handleFormError}
        />

        <input
          type="text"
          name="sex"
          placeholder="Pet Sex"
          onChange={handleChange}
          onFormError={handleFormError}
        />

        <input
          type="text"
          name="feeding"
          placeholder="Diet Information"
          onChange={handleChange}
          onFormError={handleFormError}
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
