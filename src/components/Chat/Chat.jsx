import React from 'react';
import { PropTypes } from 'prop-types';
import { MdTagFaces, MdMic, MdAttachFile } from 'react-icons/md';
import { messagesList } from '../../mockData';

import Message from './Message/Message';
import './Chat.scss';

function Chat({ selectedChat }) {
  return (
    <section className='app__chat'>
      <div className='chat__header'>
        <img src={selectedChat.avatar} alt="profile picture" />

        <div className="header__info">
          <h3 className='info__name'>
            {selectedChat.name}
          </h3>
          <p className='info__status'>
            {selectedChat.status}
          </p>
        </div>
      </div>

      <div className='chat__body'>
        {
          messagesList.map((message) => (
            <Message
              key={message.id}
              isSentByMe={message.senderID === 0}
              message={message.text}
            />
          ))
        }
      </div>

      <div className='chat__footer'>
        <MdTagFaces className='container__icon' />
        <MdAttachFile className='container__icon' />

        <div className='footer__container'>
          <input type="text" placeholder='Escribe un mensaje aquí' />
        </div>

        <MdMic className='container__icon' />
      </div>
    </section>
  );
}

Chat.propTypes = {
  selectedChat: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastText: PropTypes.string.isRequired,
    lastTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;
