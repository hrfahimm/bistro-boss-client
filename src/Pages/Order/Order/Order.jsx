import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import menu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard';
import UseMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
const Order = () => {
   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks '];
   const { category } = useParams();
   const initialIndex = categories.indexOf(category);
   const [tabIndex, setTabIndex] = useState(initialIndex);
   const [menu] = UseMenu();

   const dessert = menu.filter((item) => item.category === 'dessert');
   const salad = menu.filter((item) => item.category === 'salad');
   const soup = menu.filter((item) => item.category === 'soup');
   const pizza = menu.filter((item) => item.category === 'pizza');
   const drinks = menu.filter((item) => item.category === 'drinks');
   return (
      <div>
         <Helmet>
            <title>BB-Orderc </title>
         </Helmet>
         <Cover img={orderImg} title='Order Food'></Cover>

         <Tabs
            className='mt-16 item-center text-center'
            defaultIndex={tabIndex}
            onSelect={(index) => console.log(index)}>
            <TabList className='font-bold p-4 text-xl'>
               <Tab>Salad</Tab>
               <Tab>Pizza</Tab>
               <Tab>Soup</Tab>
               <Tab>Drinks</Tab>
               <Tab>Dessert</Tab>
            </TabList>
            <TabPanel className=' mt-8'>
               <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={dessert }></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={drinks}></OrderTab>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Order;
