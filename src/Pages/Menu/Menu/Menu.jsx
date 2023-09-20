import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/reservation/category-pizza.jpg';
import deasuteImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuCatagori from '../MenuCatagori/MenuCatagori';
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Menu = () => {
   const [menu] = UseMenu();
   const dessert = menu.filter((item) => item.category === 'dessert');
   const salad = menu.filter((item) => item.category === 'salad');
   const soup = menu.filter((item) => item.category === 'soup');
   const pizza = menu.filter((item) => item.category === 'pizza');
   const offered = menu.filter((item) => item.category === 'offered');

   return (
      <div>
         <Helmet>
            <title>BB-Menu</title>
         </Helmet>
         {/* main Cover */}
         <Cover img={menuImg} title='Our Menu'></Cover>
         {/*section --- title */}
         <SectionTitle subHeading={'Do not miss '} heading={'Today Offer'}></SectionTitle>

         {/* Only ---- offered Item */}
         <MenuCatagori items={offered}></MenuCatagori>
         {/* ALL  ------  Item */}
         <MenuCatagori items={dessert} title='deasute' img={deasuteImg}></MenuCatagori>
         <MenuCatagori items={pizza} title={'pizza'} img={pizzaImg}></MenuCatagori>
         <MenuCatagori items={salad} title={'salad'} img={saladImg}></MenuCatagori>
         <MenuCatagori items={soup} title={'soup'} img={soupImg}></MenuCatagori>
      </div>
   );
};

export default Menu;
