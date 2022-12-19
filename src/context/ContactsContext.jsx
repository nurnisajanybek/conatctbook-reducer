import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

export const contactContext = createContext();
const API = "http://localhost:8000/contacts";

const INIT_STATE = {
  contacts: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "getAllContacts":
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
}

const ContactsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const params = useParams();

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function getContacts() {
    const { data } = await axios(API);
    dispatch({
      type: "getAllContacts",
      payload: data,
    });
  }
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function editContact(newObj, id) {
    await axios.patch(`${API}/${id}`, newObj);
    getContacts(id);
  }
  useEffect(() => {
    getContacts(params.id);
  }, []);

  const cloud = {
    addContact,
    getContacts,
    contacts: state.contacts,
    deleteContact,
  };

  return (
    <contactContext.Provider value={cloud}>{children}</contactContext.Provider>
  );
};

export default ContactsContext;
