import React, { useState, useEffect } from "react";
import "./App.css";
import {uuid} from "uuidv4";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contacts} ,contact]);
  };

  const removeContactHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;  
    });
    setContacts(newContact);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(
      localStorage.getItem("LOCAL_STORAGE_KEY")
    );
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId= {removeContactHandler}/>
    </div>
  );
}

export default App;
