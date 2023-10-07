
const Bookmark = ({bookmark}) => {

  const {title} = bookmark;

  return (

    <div> 
        
            <h1 className=" bg-teal-300	font-semibold mb-4 text-center p-4 rounded-lg mt-4 mx-4"> {title} </h1>
    </div>
  );
};

export default Bookmark;