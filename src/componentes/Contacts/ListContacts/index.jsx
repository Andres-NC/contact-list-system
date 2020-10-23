import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';

const ListContacts = ({listContacts, handleDelete}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listContacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.firstname}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
            <td>{contact.contactnumber}</td>
            <td>
              <Link to={`/contact-form/${contact.id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListContacts;
