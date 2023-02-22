import React from 'react';
import { PropTypes } from 'prop-types';

import './Contact.scss';

function Contact({ avatar, name, message }) {
  return (
    <div className='contact'>
      <div className="contact__avatar">
        <img src={avatar} alt="profile avatar" />
      </div>

      <div className="contact__info">
        <h3 className='contact__info-name'>
          {name}
        </h3>
        <p className='contact__info-message'>
          {message}
        </p>
      </div>

      <span className='contact__time'>
        12:00
      </span>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Contact;
