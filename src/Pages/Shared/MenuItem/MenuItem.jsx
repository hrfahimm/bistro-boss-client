const MenuItem = ({ item }) => {
   const { image, price, recipe, name } = item;
   return (
      <div className='flex space-x-4'>
         <img
            className='w-[100px] bg-center border-4 border-indigo-500/50 '
            style={{ borderRadius: '0 200px 200px 200px' }}
            src={image}
            alt=''
         />
         <div>
            <h3 className='text-xl width-bold'>{name}----</h3>
            <p className='text-gry text-xs'>{recipe}</p>
         </div>
         <p className='text-yellow-500 font-bold '>${price}</p>
      </div>
   );
};

export default MenuItem;
