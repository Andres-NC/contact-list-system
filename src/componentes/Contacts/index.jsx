import React from 'react';
import ListContacts from './ListContacts';
import {ContactsContainer} from './styles';

const Contacts = () => {
  return (
    <ContactsContainer>
      <h1>List of contacts</h1>
      <button>Create contact</button>
      <ListContacts />
    </ContactsContainer>
  );
};

export default Contacts;
