import React from 'react';

import { ContactList, Chat } from './components';
import './App.scss';

function App() {
  return (
    <section className="app">
      <ContactList />
      <Chat />
    </section>
  );
}

export default App;
