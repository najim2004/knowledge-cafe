import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime,setReadingTime] =useState(0);
  const handleBookmarks =(blog)=>{
    setBookmarks([...bookmarks,blog])
    
  };
  const handleReadingTime =(id,reading_time)=>{
    setReadingTime(readingTime+reading_time)
    console.log(bookmarks);
    setBookmarks(bookmarks.filter(bookmark=>bookmark.id!==id));
  };
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header></Header>
      <hr className='my-8 bg-[rgba(17,17,17,0.15)]' />
      <div className='flex gap-6 '>
      <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </div>
  )
}

export default App
