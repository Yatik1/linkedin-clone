import React from 'react'
import './Sidebar.css' 
import { Avatar } from '@mui/material'

function Sidebar() {
    function recentItem(topic) {
      return(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
             <p>{topic}</p>
        </div>
     )};

  return (
    <div className='sidebar'>
       <div className='sidebar_top'>
          <img src='https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
           alt='' />
          <Avatar className='sidebar_avatar'/>
          <h2>Yatik</h2>
          <h4>yatiksrivastava@gmail.com</h4>
       </div>

       <div className='sidebar_stats'>
          <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,567</p>
          </div>
          <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>347</p>
          </div>
       </div>

       <div className='sidebar_bottom'>
        <p>Recent</p>
         {recentItem('react')}
         {recentItem('design')}
         {recentItem('routing')}
         {recentItem('Hooks')}
         {recentItem('ui-font')}
       </div>
    </div>
  )
}

export default Sidebar
