import React from 'react';
import ContactCard from './ContactCard';
import { contactData } from "@/constants";

const Contacts = () => {
  return (
    <div id="contacts" className='flex my-20 flex-wrap gap-20 sm:mx-40 flex-col items-center justify-center'>
      <h4 className='text-3xl md:text-5xl text-center text-gray-light w-full font-semibold'>Contact<span className='text-red'>US</span></h4>
      <div className='flex justify-around flex-wrap gap-20'>
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
    </div>
  );
};

export default Contacts;
