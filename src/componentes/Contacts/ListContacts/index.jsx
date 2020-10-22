import React from 'react';
import {Table} from 'react-bootstrap';

const ListContacts = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>mark@correo.com</td>
          <td>5522172561</td>
          <td>
            <button>Update</button> <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>jacob@correo.com</td>
          <td>5522172561</td>
          <td>
            <button>Update</button> <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>Thornton</td>
          <td>larry@correo.com</td>
          <td>5522172561</td>
          <td>
            <button>Update</button> <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListContacts;
