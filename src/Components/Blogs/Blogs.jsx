import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleClick, readingClick}) => {

  const [blogs, setBlogs] = useState([])

  useEffect(() =>{
     fetch('blogs.json')
     .then(res => res.json())
     .then(data => setBlogs(data))
  },[])

  return (
    <div className="lg:w-2/4">
         <h1 className="text-2xl font-semibold pl-4"> Blogs: {blogs.length}  </h1>

         {
            blogs.map(blog => <Blog 
               blog={blog}
               key={blogs.id}
               handleClick={handleClick}
               readingClick={readingClick}
               > </Blog>)
         }

    </div>
  );
};



Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}
export default Blogs;