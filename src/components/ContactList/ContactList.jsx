import React from 'react';
import { MdOutlineSearch, MdPeople, MdDonutLarge, MdMessage, MdMoreVert } from 'react-icons/md';

import './ContactList.scss';
import { contactList } from '../../mockData';
import Contact from './Contact/Contact';

function ContactList() {
  return (
    <section className='app__contacts'>
      <div className='contacts__header'>
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b2/b236995b8fc6f2dcd262216a11a9765056be29b1_full.jpg" alt="profile picture" />

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
            key={contact.id}
            avatar={contact.avatar}
            name={contact.name}
            message={contact.lastText}
            time={contact.lastTime}
          />
        ))
      }
    </section>
  );
}

export default ContactList;
