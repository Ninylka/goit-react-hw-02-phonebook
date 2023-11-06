
import { Component } from 'react';
import {
  ContainerDivPhonebook,
  TitlePhonebook
 
} from './FormContacts/FormContacts.styled';
import { nanoid } from 'nanoid';

import { FormContacts } from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

createUser = (data) => {
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, data ],
    name: '', 
    
  }));
};
 
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.createUser( {
        id: nanoid(),
      name: this.state.name,
    }
    )
  };
  render() {
    const {  contacts } = this.state;
    return (
      <ContainerDivPhonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <FormContacts onSubmit={this.createUser}>
        </FormContacts>
        <h2>Contacts</h2>
        <ListContacts  contacts={contacts}>
        </ListContacts>
      </ContainerDivPhonebook>
    );
  }
}


