  
import { ButtonDelete, ItemContact } from '../FormContacts/FormContacts.styled'
      export const ListContacts = ({ contacts , filter, onDelete }) => {
        const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
        return (
          <ul>
            {filteredContacts.map((contact) => (
              <ItemContact key={contact.id}>{contact.name} : {contact.number} <ButtonDelete type="button" onClick={() => onDelete(contact.id)}>Delete</ButtonDelete></ItemContact>
              
            ))}
            
          </ul>
        );
      };

