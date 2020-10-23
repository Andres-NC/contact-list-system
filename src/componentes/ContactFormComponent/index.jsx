import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers';
import {CONTACT_FORM_SCHEMA} from '../../constants/validationSchemas';
import Input from '../global/Input';
import {createContacts, getContact, updateContacts} from '../../services/contacts';

import {ContactFormContainer} from './styles';
const ContactFormComponent = () => {
  const {register, handleSubmit, errors, control, setValue, reset, getValues} = useForm({
    resolver: yupResolver(CONTACT_FORM_SCHEMA),
  });

  const [contact, setContact] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      if (params.id) {
        const result = await getContact({id: params.id});
        if (result.status === 200) {
          const contact = result.data.data;
          setContact({
            id: contact.id,
            firstName: contact.firstname,
            lastName: contact.lastname,
            email: contact.email,
            contactNumber: contact.contactnumber,
          });
        }
      }
    };
    fetchContact();
  }, [params.id]);

  const onSubmit = async formData => {
    try {
      let result = null;
      const user = JSON.parse(localStorage.getItem('user'));
      const dataContact = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        user_id: user.id,
      };

      if (contact) {
        result = await updateContacts({...dataContact, id: contact.id});
      } else {
        result = await createContacts(dataContact);
      }

      if (result.status === 201) {
        reset({
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
        });
        alert('Contact created');
      }
      if (result.status === 200) {
        alert('Contact updated');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactFormContainer>
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <Input
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register}
          defaultValue={contact ? contact.firstName : ''}
          marginBottom="0"
        />
        <label>Last name</label>
        <Input
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register}
          defaultValue={contact ? contact.lastName : ''}
          marginBottom="0"
        />
        <label>Email</label>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          ref={register}
          defaultValue={contact ? contact.email : ''}
          marginBottom="0"
        />
        <label>Contact number</label>
        <Input
          type="text"
          placeholder="Contact number"
          name="contactNumber"
          ref={register}
          defaultValue={contact ? contact.contactNumber : ''}
          marginBottom="0"
        />
        <button type="submit">Save</button>
      </form>
    </ContactFormContainer>
  );
};

export default ContactFormComponent;
