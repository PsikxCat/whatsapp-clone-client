import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSearch, MdPeople, MdDonutLarge, MdMessage, MdMoreVert } from 'react-icons/md';

import './ContactList.scss';
import { contactList } from '../../mockData';
import Contact from './Contact/Contact';

function ContactList({ setChat }) {
  return (
    <section className='app__contacts'>
      <div className='contacts__header'>
        <img src={'/images/psikocat_logo.svg'} alt="profile picture" />

        <div className="header__menu">
          <MdPeople className='menu__icon'/>
          <MdDonutLarge className='menu__icon'/>
          <MdMessage className='menu__icon'/>
          <MdMoreVert className='menu__icon'/>
        </div>
      </div>

      <div className='contacts__search'>
        <div className="search__container">
          <MdOutlineSearch className='search-icon' />
          <input type="text" placeholder="Busca un chat o inicia uno nuevo." />
        </div>
      </div>

      {
        contactList.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            setChat={setChat}
          />
        ))
      }
    </section>
  );
}

ContactList.propTypes = {
  setChat: PropTypes.func.isRequired,
};

export default ContactList;
