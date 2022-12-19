import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContactsContext from "./context/ContactsContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ContactsContext>
        <MainRoutes />
      </ContactsContext>
    </BrowserRouter>
  );
};

export default App;
