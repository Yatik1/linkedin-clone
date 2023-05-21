import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
        
        {/* Header */} 
        <Header />
        <div className='app_body'>
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            {/* Widgets  */}
        </div>
       
    </div>
  );
}

export default App;
