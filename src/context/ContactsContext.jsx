import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const contactContext = createContext();
const API = "http://localhost:8000/contacts";

const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "getAllContacts":
      return {
        ...state,
        contacts: action.payload,
      };
    case "getContact":
      return {
        ...state,
        contactToEdit: action.payload,
      };
    default:
      return state;
  }
}

const ContactsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const params = useParams();
  const navigate = useNavigate();
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

  async function editContact(id, newObj) {
    let { data } = await axios.patch(`${API}/${id}`, newObj);

    getContacts();
    navigate("/");
  }
  async function getContactDetails(id) {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "getContact",
      payload: data,
    });
  }

  useEffect(() => {
    getContacts(params.id);
  }, []);

  const cloud = {
    contacts: state.contacts,
    contactToEdit: state.contactToEdit,
    addContact,
    getContacts,
    deleteContact,
    editContact,
    getContactDetails,
  };

  return (
    <contactContext.Provider value={cloud}>{children}</contactContext.Provider>
  );
};

export default ContactsContext;
