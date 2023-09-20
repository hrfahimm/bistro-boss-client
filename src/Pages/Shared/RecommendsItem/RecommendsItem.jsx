const RecommendsItem = ({ item }) => {
  const { image, recipe, name } = item;
  return (
    <div className='flex  flex-row'>
      <div className='card w-96 bg-base-100 shadow-xl '>
        <figure className='px-10 pt-10'>
          <img src={image} alt='Shoes' className='rounded-xl ' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{name}</h2>
          <p>{recipe}</p>
          <div className='card-actions pt-2'>
            <button className='btn border-b-3 btn-outline  btn-warning'>
              Add TO Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendsItem;
