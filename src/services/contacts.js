import endpoints from '../api';
import axios from 'axios';

export const getContact = async ({id}) => {
  return await axios.get(
    `http://localhost:3001${endpoints.api}${endpoints.contacts}${endpoints.contact}/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
};

export const getContacts = async ({user_id, query}) => {
  return await axios.get(
    `http://localhost:3001${endpoints.api}${endpoints.contacts}/${user_id}${query}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
};

export const deleteContacts = async ({id}) => {
  return await axios.delete(
    `http://localhost:3001${endpoints.api}${endpoints.contacts}${endpoints.delete}/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
};

export const updateContacts = async data => {
  console.log(data);
  return await axios.put(
    `http://localhost:3001${endpoints.api}${endpoints.contacts}${endpoints.update}/${data.id}`,
    data,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
};

export const createContacts = async data => {
  return await axios.post(
    `http://localhost:3001${endpoints.api}${endpoints.contacts}${endpoints.create}`,
    data,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
};
