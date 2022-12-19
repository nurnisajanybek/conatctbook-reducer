import React from "react";

const EditContacts = (id) => {
  return (
    <div>
      <input
        name="name"
        // onChange={(e) => handleInput(e)}
        type="text"
        placeholder="name"
      />
      <input
        name="surname"
        // onChange={(e) => handleInput(e)}
        type="text"
        placeholder="surname"
      />
      <input
        name="number"
        // onChange={(e) => handleInput(e)}
        type="text"
        placeholder="number"
      />
      <button>save</button>
    </div>
  );
};

export default EditContacts;
