import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { MdTagFaces, MdMic, MdAttachFile } from 'react-icons/md';
import EmojiPicker from 'emoji-picker-react';

import { messagesList } from '../../mockData';
import Message from './Message/Message';
import './Chat.scss';

function Chat({ selectedChat }) {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState(messagesList);

  const onEmojiClick = (event) => {
    setText(text + event.emoji);
    setIsPickerVisible(false);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newMessage = {
        id: messageList.length + 1,
        messageType: 'TEXT',
        text,
        senderID: 0,
        addedOn: '12:12',
      };

      setMessageList([...messageList, newMessage]);
      setText('');
    }
  };

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
          messageList.map((message) => (
            <Message
              key={message.id}
              isSentByMe={message.senderID === 0}
              message={message.text}
            />
          ))
        }
      </div>

      <div className='chat__footer'>
        {
          isPickerVisible && (
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              emojiStyle='google'
            />
          )
        }

        <MdTagFaces
          onClick={() => setIsPickerVisible(!isPickerVisible)}
          className='container__icon'
        />
        <MdAttachFile className='container__icon' />

        <div className='footer__container'>
          <input
            onChange={(event) => setText(event.target.value)}
            onKeyDown={onKeyDown}
            value={text}
            type="text" placeholder='Escribe un mensaje aquí' />
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
