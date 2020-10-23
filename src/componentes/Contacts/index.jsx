import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import ListContacts from './ListContacts';
import {getContacts, deleteContacts} from '../../services/contacts';
import {ContactsContainer} from './styles';

const Contacts = () => {
  const [listContacts, setListContacts] = useState([]);
  const [pagination, setPagination] = useState([]);
  const location = useLocation();
  // let active = pagination.current;
  // let items = [];

  const fetchContacts = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const result = await getContacts({
        user_id: user.id,
        query: location.search,
      });
      if (result.status === 200) {
        setListContacts(result.data.data);
        setItemsPagination(result.data.pagination);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchContacts();
  }, [location.search]);

  const setItemsPagination = paginationData => {
    let active = paginationData.current_page;
    let items = [];
    for (let number = 1; number <= paginationData.last_page; number++) {
      items.push(
        <NavLink key={number} to={`${location.pathname}?page=${number}`}>
          <PaginationItem active={number === active}>
            <PaginationLink>{number}</PaginationLink>
          </PaginationItem>
        </NavLink>,
      );
    }
    setPagination({pagination: paginationData, items});
  };

  const handleDelete = async id => {
    try {
      const result = await deleteContacts({id: id});
      if (result.status === 200) {
        fetchContacts();
        alert('Contact deleted');
      }
    } catch (error) {}
  };

  return (
    <ContactsContainer>
      <h1>List of contacts</h1>
      <Link to="/contact-form">
        <button>Create contact</button>
      </Link>
      <ListContacts listContacts={listContacts} handleDelete={handleDelete} />
      {pagination?.pagination?.last_page > 1 && (
        <Pagination className="product__list--pagination">
          <NavLink to={`${location.pathname}?page=${pagination?.pagination?.current_page - 1}`}>
            <PaginationItem>
              <PaginationLink previous />
            </PaginationItem>
          </NavLink>
          {pagination.items}
          <NavLink to={`${location.pathname}?page=${pagination?.pagination?.current_page + 1}`}>
            <PaginationItem>
              <PaginationLink next />
            </PaginationItem>
          </NavLink>
        </Pagination>
      )}
    </ContactsContainer>
  );
};

export default Contacts;
