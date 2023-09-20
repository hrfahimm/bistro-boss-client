import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/UseCart';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email };
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch update the item of cart
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add To Cart',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className=' p-2'>
        <img src={image} alt='Shoes' className='rounded-xl' />
      </figure>
      <p className='bg-slate-300 text-black absolute right-0 mx-2 font-bold  my-2 rounded p-[4px]'>
        ${price}/-
      </p>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions'>
          <button
            onClick={() => handleAddToCart(item)}
            className=' order-slate-600 border-xs border-b-4 mt-8 text-black btn btn-outline'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
