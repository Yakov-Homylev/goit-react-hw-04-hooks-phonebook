import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const notParsedContacts = localStorage.getItem("contacts");
    const contacts = JSON.parse(notParsedContacts);
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const id = nanoid();

    const isNameIncludeInArray = this.state.contacts.find(
      (contact) => contact.name === name
    );
    const isNumberIncludeInArray = this.state.contacts.find(
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

    this.setState({ contacts: [...this.state.contacts, { name, id, number }] });
    e.currentTarget.reset();
  };

  searchByName = (e) => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  filteringArray = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  removeContactById = (id) => {
    const removedArray = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: removedArray });
  };

  render() {
    const contactsArray = this.filteringArray();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />

        <h2>Contacts</h2>
        <Filter
          type="text"
          title="Find contacts by name"
          onChange={this.searchByName}
        />
        <ContactList
          array={contactsArray}
          removeContact={this.removeContactById}
        />
      </div>
    );
  }
}

export default App;
