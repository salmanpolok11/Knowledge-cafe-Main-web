import PropTypes from 'prop-types'
import Bookmark from '../Bookmaek/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="lg:md:w-1/2 ">

      <div className=' text-center bg-gray-200  mt-2 rounded-lg lg:mx-10 p-5 lg:mt-12 '>
           <h1 className=' text-3xl font-bold'> Spent time on read : {readingTime} Min  </h1>
      </div>

         <div className='  bg-gray-200 mt-2 rounded-lg lg:mx-10 p-5'>
                     <h1 className="text-3xl font-bold text-center border-dotted border-b-4
                      border-red-400 pb-3"> Bookmarked Blogs :  {bookmarks.length} Item </h1>
                 {
                       bookmarks.map(bookmark => <Bookmark bookmark={bookmark}> </Bookmark>)
                  }
         </div>

    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;