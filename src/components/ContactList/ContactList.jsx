import React from 'react';
import { MdOutlineSearch, MdPeople, MdDonutLarge, MdMessage, MdMoreVert } from 'react-icons/md';

import './ContactList.scss';
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

      <Contact
        avatar='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e3/e31c0e2a14bf0fcd8a423dca3f4014327c5888e3_full.jpg'
        name='John Doe'
        message='Message Lorem ipsum dolor.'
      />
      <Contact
        avatar='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00ae680e42c34a91c88bd4594c1c4149111c6293_full.jpg'
        name='Heisenberg'
        message='Message Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
      />
    </section>
  );
}

export default ContactList;
