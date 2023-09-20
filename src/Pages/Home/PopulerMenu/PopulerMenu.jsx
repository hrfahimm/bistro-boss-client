import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';
const PopulerMenu = () => {
   const [menu] = UseMenu();
   const populer = menu.filter((item) => item.category === 'populer');

   return (
      <section className='mb-12'>
         <SectionTitle heading='From Our Menu' subHeading='Populer Item'></SectionTitle>

         <div className='grid md:grid-cols-2 gap-10'>
            {populer.map((item) => (
               <MenuItem key={item._id} item={item}></MenuItem>
            ))}
         </div>
      </section>
   );
};

export default PopulerMenu;
