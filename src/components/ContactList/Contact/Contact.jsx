import React from 'react';
import { PropTypes } from 'prop-types';

import './Contact.scss';

function Contact({ contact, setChat }) {
  return (
    <div className='contact' onClick={() => setChat(contact)}>
      <div className="contact__avatar">
        <img src={contact.avatar} alt="profile avatar" />
      </div>

      <div className="contact__info">
        <h3 className='contact__info-name'>
          {contact.name}
        </h3>
        <p className='contact__info-message'>
          {contact.lastText}
        </p>
      </div>

      <span className='contact__time'>
        {contact.lastTime}
      </span>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastText: PropTypes.string.isRequired,
    lastTime: PropTypes.string.isRequired,
  }).isRequired,
  setChat: PropTypes.func.isRequired,
};

export default Contact;
