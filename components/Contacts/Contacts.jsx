import React from 'react';
import ContactCard from './ContactCard';

const Contacts = () => {
  const contactData = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' }
  ];

  return (
    <div id="contacts" className='flex justify-around mb-20 flex-wrap gap-20 sm:mx-40'>
      {contactData.map((contact, index) => (
        <ContactCard key={index} name={contact.name} email={contact.email} phone={contact.phone} />
      ))}
    </div>
  );
};

export default Contacts;
