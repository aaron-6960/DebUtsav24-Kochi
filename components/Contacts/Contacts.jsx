import React from 'react';
import ContactCard from './ContactCard';
import { contactData } from "@/constants";

const Contacts = () => {
  return (
    <div id="contacts" className='flex justify-around mb-20 flex-wrap gap-20 sm:mx-40'>
      {contactData.map((contact, index) => (
        <ContactCard 
          key={index} 
          name={contact.name} 
          title={contact.title} 
          phone={contact.phone} 
          image={contact.image}  
        />
      ))}
    </div>
  );
};

export default Contacts;
