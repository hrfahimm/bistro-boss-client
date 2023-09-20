import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import fetaured from '../../../assets/home/featured.jpg';
import bg from '../../../assets/home/featured.jpg';
const Featured = () => {
  return (
    <div className='mt-24'>
      <div
        className='featured-item bg-fixed p-6'
        style={{ backgroundImage: `url(${bg})` }}>
        <SectionTitle heading='Feature Item' subHeading='Chake It Out'></SectionTitle>
        <div className='md:flex bg-slate-600 bg-opacity-50 m-20 '>
          <div>
            <img src={fetaured} alt='' />
          </div>
          <div className='p-6 text-white my-auto'>
            <p className='text-2xl pb-4 font-bold'>Aug 20, 2029</p>
            <p className='uppercase text-xl pb-2'>Where i get hunny</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, Lorem,
              ipsum dolor sit amet Lorem, ipsum dolor consectetur adipisicing elit.
              Laboriosam, sit amet consectetur adipisicing elit. Laboriosam, placeat!
            </p>
            <button className=' border-0 border-b-4 mt-8 text-white btn btn-outline'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
