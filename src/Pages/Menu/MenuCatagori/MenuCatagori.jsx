import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCatagori = ({ items, title, img }) => {
   return (
      <div className='m-16 p-16'>
         {title && <Cover img={img} title={title}></Cover>}

         <div className='grid md:grid-cols-2 gap-10 mt-8 p-8'>
            {items.map((item) => (
               <MenuItem key={item._id} item={item}></MenuItem>
            ))}
         </div>
         <Link to={`/order/${title}`}>
            {' '}
            <button className=' order-slate-600 border-xs border-b-4 mt-8 text-black btn btn-outline'>
               Order Now
            </button>
         </Link>
      </div>
   );
};

export default MenuCatagori;
