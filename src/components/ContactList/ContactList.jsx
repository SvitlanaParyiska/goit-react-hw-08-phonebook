import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className="container">
      <List>
        {visibleContacts.map(el => (
          <ContactItem contact={el} key={Number(el.id)} />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
