import React from 'react';
import FilesList from './components/FilesList.js';
import './scss/global.scss';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo"><img src="https://via.placeholder.com/100x33.png?text=Logo" alt="Logo placeholder C/O https://placeholder.com/"/></div>
          <h1>Web Accessibility Dashboard</h1>
        </div>
      </header>
      <FilesList/>
    </div>
  );
}

export default App;
