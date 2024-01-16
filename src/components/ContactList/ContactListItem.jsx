import React from 'react';
import styles from './ContactList.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const { id, name, phone } = contact;

  const handleDeleteClick = () => {
    onDeleteContact(id);
  };

  return (
    <div className={styles.contactsListItem}>
      <div className={styles.contactsListItemLine}>
        {name}: {phone}
      </div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default ContactListItem;
