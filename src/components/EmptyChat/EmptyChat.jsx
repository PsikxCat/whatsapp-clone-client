import React from 'react';

import './EmptyChat.scss';

function EmptyChat() {
  return (
    <section className='emptychat__container'>
      <img src={'/images/welcome-placeholder.png'} className='emptychat__img' />
      <span>WhatsApp Web</span>
      <p>
        Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.
        <br />
        Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
      </p>
    </section>
  );
}

export default EmptyChat;
