import React from 'react';
import { MdTagFaces, MdMic, MdAttachFile } from 'react-icons/md';

import Message from './Message/Message';
import './Chat.scss';

function Chat() {
  return (
    <section className='app__chat'>
      <div className='chat__header'>
        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00ae680e42c34a91c88bd4594c1c4149111c6293_full.jpg" alt="profile picture" />

        <div className="header__info">
          <h3 className='info__name'>
            Heisenberg
          </h3>
          <p className='info__status'>
            Online
          </p>
        </div>
      </div>

      <div className='chat__body'>
        <Message
          isSentByMe={true}
          message='Hola, ¿cómo estás?'
        />
        <Message
          isSentByMe={false}
          message='Bien, ¿y tú?'
        />
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

export default Chat;
