import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
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
            <Feed />
            {/* Widgets  */}
        </div>
       
    </div>
  );
}

export default App;
