import React, { useState } from 'react';

import { ContactList, Chat, EmptyChat } from './components';
import './App.scss';

function App() {
  const [selectedChat, setSelectedChat] = useState();

  return (
    <section className="app">
      <ContactList setChat={setSelectedChat}/>

      {
        selectedChat
          ? <Chat selectedChat={selectedChat}/>
          : <EmptyChat />
      }
    </section>
  );
}

export default App;
