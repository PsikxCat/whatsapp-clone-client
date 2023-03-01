import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

function Message({ isSentByMe, message }) {
  return (
  <div className={'chat__div ' + (isSentByMe ? 'sent-by-me' : 'sent-by-other')}>
    <p className={'chat__message ' + (isSentByMe ? 'sent-by-me' : 'sent-by-other')}>
      { message }
      {/* <span className='message__timestamp'>
        {new Date().toUTCString()}
      </span> */}
    </p>
  </div>
  );
};

Message.propTypes = {
  isSentByMe: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
