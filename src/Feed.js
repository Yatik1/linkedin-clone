import React, {useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {

  const [posts , setPosts] = useState([]);
   
  const sendPost = (e) =>{
    e.preventDefault();   
  }

  return (
    <div className='feed'>
       <div className='feed_inputContainer'> 
         <div className='feed_input'>
            <CreateIcon /> 
            <form>
                <input type='text'/>
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
         </div>

         <div className='feed_inputOptions'>
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
            <InputOption Icon={SubscriptionsIcon} title='Vedio' color='orange' />
            <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
            <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='green' />
         </div>
       </div>

       {/* Posts section */}
       {posts.map((post) => {
          <Post />
       })}
       <Post 
       name='Yatik'
       description="Description"
       message='this is test message'/>
    </div>
  )
}

export default Feed
