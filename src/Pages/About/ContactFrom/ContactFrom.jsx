import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ExampleComponent from '../../../Components/Robot/IamNotRobot';

const ContactFrom = () => {
   return (
      <div>
         <SectionTitle heading='Contact Us' subHeading='CONTACT FROM'>
            {' '}
         </SectionTitle>

         <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='   '>
               <div className='card-body  shadow-2xl bg-base-100 w-[840px] '>
                  <div className='flex  gap-4'>
                     <div className='form-control w-[400px]'>
                        <label className='label'>
                           <span className='label-text'>Name</span>
                        </label>
                        <input
                           type='text'
                           placeholder='email'
                           className='input input-bordered'
                        />
                     </div>
                     <div className='form-control w-[400px]'>
                        <label className='label'>
                           <span className='label-text'>Email</span>
                        </label>
                        <input
                           type='text'
                           placeholder='email'
                           className='input input-bordered'
                        />
                     </div>
                  </div>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Phone</span>
                     </label>
                     <input
                        type='text'
                        placeholder='email'
                        className='input input-bordered'
                     />
                  </div>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Massage</span>
                     </label>
                     <textarea
                        className='textarea textarea-bordered h-80'
                        placeholder='Massage'></textarea>
                  </div>
                  
                  <button className='btn mt-4 '>
                     Button
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-auto'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactFrom;
