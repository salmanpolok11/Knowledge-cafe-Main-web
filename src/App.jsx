
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Home/Header'

function App() {
 
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleClick = blog =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const readingClick = time => {
    console.log(time);
    const newReading = readingTime + time;
    setReadingTime(newReading);
 }
 


  return (
    <div className='lg:max-w-7xl mx-auto lg:pr-16 p-8 '>
    <Header></Header>
         <div className='md:flex justify-between '>
             <Blogs handleClick={handleClick} readingClick={readingClick} ></Blogs>
              <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
         </div>
    </div>
  )
}


export default App
