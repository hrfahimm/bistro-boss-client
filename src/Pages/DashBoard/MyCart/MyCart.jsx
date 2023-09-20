import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // how does reduce work!!!
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "  Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const tableHeader = (
    <>
      <th className='text-lg text-black '>#</th>
      <th className='text-lg text-black '>Name</th>
      <th className='text-lg text-black '>Food</th>
      <th className='text-lg text-black '>Price</th>
      <th className='text-lg text-black '>Action</th>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>BB- My Cart</title>
      </Helmet>
      <div className='p-8'>
        <div className='text-center sm:w-6/12 mx-auto my-12'>
          <p className=' text-yellow-600 mb-2 '>--- My cart---</p>
          <h3 className='text-3xl uppercase border-y-4 py-4'>Wanna Add More</h3>
        </div>

        <div className='uppercase flex  h-20 text-center item-center justify-around font-bold  '>
          <h3 className='text-lg'> total Item : {cart.length}</h3>
          <h3 className='text-lg'> total Price : ${total}</h3>

          <Link to='/dashboard/payment'>
            {" "}
            <button className='btn btn-error '>Pay</button>
          </Link>
        </div>
        <div className='overflow-x-auto  bg-base-300 rounded-3xl p-12 '>
          <table className='table'>
            <thead>
              <tr> {tableHeader}</tr>
            </thead>

            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className='flex items-center avatar mask mask-squircle w-12 h-12 '>
                      <img
                        src={item.image}
                        alt=' '
                      />
                    </div>
                  </td>
                  <td className='font-bold'>{item.name}</td>
                  <td className='text-end'>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className='btn btn-lg text-red-600'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
