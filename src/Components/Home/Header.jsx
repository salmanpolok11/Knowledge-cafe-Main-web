import img from '../images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center mx-2 p-2 border-b-4 '>
           <h1 className=' text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={img} alt="" />
    </div>
  );
};

export default Header;