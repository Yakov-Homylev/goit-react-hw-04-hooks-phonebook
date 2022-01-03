import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const notParsedContacts = localStorage.getItem("contacts");
    if (!notParsedContacts) {
      return;
    }
    const localContacts = JSON.parse(notParsedContacts);
    setContacts([...localContacts]);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const id = nanoid();

    const isNameIncludeInArray = contacts.find(
      (contact) => contact.name === name
    );
    const isNumberIncludeInArray = contacts.find(
      (contact) => contact.number === number
    );
    if (isNameIncludeInArray) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (isNumberIncludeInArray) {
      alert(`${number} is already in contacts.`);
      return;
    }
    setContacts([...contacts, { name, number, id }]);

    e.currentTarget.reset();
  };

  const removeContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([...newContacts]);
  };

  const findByName = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredArray = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContacts} />

      <h2>Contacts</h2>
      <Filter title="Find contacts by name" onChange={findByName} />
      <ContactList array={filteredArray()} removeContact={removeContact} />
    </div>
  );
}

export default App;
