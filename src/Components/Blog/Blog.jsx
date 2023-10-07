import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ( {blog, handleClick,readingClick}) => {

  const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="mb-20 space-y-4 mt-5">
         <img className=" lg:w-full rounded-2xl " src={cover} alt="" />
          
          <div className="flex justify-between items-center"> 
                 <div className="flex items-center lg:space-x-4">
                      <img className="w-16" src={author_img} alt="" />
                        <div> 
                            <h1 className=" text-2xl font-bold">{author}</h1>
                             <h2>{posted_date}</h2>
                        </div>
                 </div>

                 <div>
                       <span className="lg:text-2xl">{reading_time} min read </span>
                       <button onClick={ () => handleClick (blog)} ><FaBookmark className=' text-orange-500 text-2xl' ></FaBookmark></button>
                 </div>
          </div>

          <div> 
              <h1 className=" text-4xl font-bold"> {title}</h1>
          </div>

 <div> 
    {
       hashtags.map( (hash , idex) => <span className=' text-2xl' key={idex}>#{hash} </span>)
    }
 </div>

   <button 
   onClick={ ()=> readingClick(reading_time)}
   className=' text-purple-900 text-2xl font-bold underline'
    >Mark As Read</button>


    </div>
  );
};


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}
export default Blog;