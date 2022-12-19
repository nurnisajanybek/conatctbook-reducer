import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contactContext } from "../context/ContactsContext";
import EditContacts from "./EditContacts";

const ContactList = () => {
  const { getContacts, contacts, deleteContact, editContact } =
    useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {contacts.map((contact, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px 10px 10px 10px",
            margin: "50px 20px 0px 20px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h4>Name: {contact.name}</h4>
          <hr />
          <h4>Surname: {contact.surname}</h4>
          <hr />
          <h4>Number: {contact.number}</h4>
          <hr />
          <Link to={`/edit/${contact.id}`}>
            <button
              style={{
                color: "white",
                backgroundColor: "blue",
                borderRadius: "5px",
                marginRight: "5px",
                border: "1px blue",
              }}
            >
              edit
            </button>
          </Link>

          <button
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "5px",

              border: "1px red",
            }}
            onClick={() => deleteContact(contact.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
