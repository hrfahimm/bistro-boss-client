import React from 'react';
import background from '../../../assets/home/chef-service.jpg';
const BistroBoss = () => {
   return (
      <div
         className='bg-cover bg-center h-96 pt-24'
         style={{ backgroundImage: `url(${background})` }}>
         <div className=' pt-12 h-48 text-center bg-white mx-auto  rounded  md:w-8/12  border '>
            <h1 className='text-3xl pb-4 '>BISTRO BOSS</h1>
            <p className='text-gray text-xs font-bold'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos
               repudiandae numquam nemo non odio ut quis velit ipsa qui veniam doloremque
               nesciunt, aperiam molestiae accusamus facilis quos ex inventore!
            </p>
         </div>
      </div>
   );
};

export default BistroBoss;
