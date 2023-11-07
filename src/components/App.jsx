
import { Component } from 'react';
import { ContainerDivPhonebook,TitlePhonebook, TitleContacts } from './FormContacts/FormContacts.styled';
import { nanoid } from 'nanoid';

import { FormContacts } from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  };
  

 
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.createUser( {
        id: nanoid(),
      name: this.state.name,
    }
    )
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
   
  }

  checkContactExists = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }
  
  createUser = (data) => {
    const { name } = data;
    if (this.checkContactExists(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
      name: '', 
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    })
  }

  render() {
    const {  filter, contacts } = this.state;
    return (
      <ContainerDivPhonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <FormContacts onSubmit={this.createUser}>
        </FormContacts>
        <TitleContacts>Contacts</TitleContacts> 
        <Filter value={filter} onFind={this.changeFilter}/>
        <ListContacts  contacts={contacts} filter={filter} onDelete={this.deleteContact}>
        </ListContacts>
      </ContainerDivPhonebook>
    );
  }
}


