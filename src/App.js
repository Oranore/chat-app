import React from 'react';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Contact
        name="Oranore"
        imgAvatar="https://randomuser.me/api/portraits/men/13.jpg"
        isOnline
      />
      <Contact
        name="John"
        imgAvatar="https://randomuser.me/api/portraits/men/81.jpg"
        isOnline={false}
      />
      <Contact
        name="Florence"
        imgAvatar="https://randomuser.me/api/portraits/women/76.jpg"
        isOnline
      />
    </div>
  );
}

export default App;
