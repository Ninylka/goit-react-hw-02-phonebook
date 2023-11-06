

import { Component } from 'react';
import {
  ContainerDivPhonebook,
  TitlePhonebook,
  FormPhonebook,
  LabelPhonebook,
  InputPhonebookName,
  ButtonPhonebook
} from './FormContacts/FormContacts.styled';
import { nanoid } from 'nanoid';
import { NumberPhone } from './NumberPhone/NumberPhone';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  
  };

  handleChange = (evt) => {
    this.setState({ name: evt.target.value });
  
    
  };


  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name } = this.state;

    const contact = {
      id: nanoid(),
      name,
      
    
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    
    }));
  };



  handleAddNumber = (number) => {
    const { name } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    }));
  };


  render() {
    const { name, contacts } = this.state;
    return (
      <ContainerDivPhonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <FormPhonebook onSubmit={this.handleSubmit}>
          <LabelPhonebook>
            Name
            <InputPhonebookName
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </LabelPhonebook>
          <NumberPhone onAddNumber={this.handleAddNumber} />
          <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
        </FormPhonebook>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name} : {contact.number}</li>
          ))}
        </ul>
      </ContainerDivPhonebook>
    );
  }
}


