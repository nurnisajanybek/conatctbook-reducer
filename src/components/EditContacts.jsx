import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contactContext } from "../context/ContactsContext";

const EditContacts = () => {
  const { contactToEdit, editContact, getContactDetails } =
    useContext(contactContext);
  const [newEditContact, setNewEditContact] = useState(contactToEdit);
  const { id } = useParams();

  async function handleEditInput(e) {
    let newContact = {
      ...newEditContact,
      [e.target.name]: e.target.value,
    };
    setNewEditContact(newContact);
  }

  useEffect(() => {
    setNewEditContact(contactToEdit);
  }, [contactToEdit]);
  console.log(newEditContact);

  useEffect(() => {
    getContactDetails(id);
  }, []);

  return (
    <div>
      {newEditContact ? (
        <>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={newEditContact.name}
            onChange={handleEditInput}
          />
          <input
            name="surname"
            type="text"
            placeholder="surname"
            value={newEditContact.surname}
            onChange={handleEditInput}
          />
          <input
            name="number"
            type="text"
            placeholder="number"
            value={newEditContact.number}
            onChange={handleEditInput}
          />
          <button onClick={() => editContact(id, newEditContact)}>save</button>
        </>
      ) : (
        "..loading"
      )}
    </div>
  );
};

export default EditContacts;
