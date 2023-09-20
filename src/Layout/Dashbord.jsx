import { Helmet } from "react-helmet-async";
import {
  FaAddressBook,
  FaBabyCarriage,
  FaBook,
  FaBookDead,
  FaBookMedical,
  FaHome,
  FaSearchengin,
  FaServicestack,
  FaShoppingCart,
  FaTable,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";

const Dashbord = () => {
  const [cart] = useCart();

  // todo : load admin data
  //const isAdmin = true;
  const [isAdmin] = UseAdmin();

  const sideOption = (
    <div>
      {isAdmin ? (
        <>
          <li>
            <Link to='/dashboard/adminhome'>
              <FaHome />
              Admin Home
            </Link>
          </li>
          <li>
            <Link to='/dashboard/additem'>
              <FaUtensils />
              Add an Item
            </Link>
          </li>
          <li>
            <Link to='/dashboard/manageitems'>
              <FaWallet />
              Manage Items
            </Link>
          </li>

          <li>
            <Link to='/dashboard/allusers'>
              <FaUsers />
              All Users
            </Link>
          </li>
          <li>
            <Link to='/dashboard/mycart'>
              <FaShoppingCart />
              My Cart
              <span className='outline-1 px-2 rounded font-bold '>+{cart?.length || 0}</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/payment'>
              <FaBook />
              Manage Bookings
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to='/dashboard/userhome'>
              <FaHome />
              User Home
            </Link>
          </li>
          <li>
            <Link to='/dashboard/revervation'>
              <FaBookDead /> Reservation
            </Link>
          </li>
          <li>
            <Link to='/dashboard/payment'>
              <FaWallet />
              Payment History
            </Link>
          </li>
          <li>
            <Link to='/dashboard/mycart'>
              <FaShoppingCart />
              My Cart
              <span className='outline-1 px-2 rounded font-bold '>+{cart?.length || 0}</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/addreview'>
              {" "}
              <FaSearchengin />
              Add Review
            </Link>
          </li>
          <li>
            <Link to='/dashboard/mybooking'>
              {" "}
              <FaBookMedical />
              My Booking
            </Link>
          </li>
        </>
      )}

      {/* ======================================================== */}
      <div className='mt-32'>
        <div className='divider text-lg font-bold'>Home Page</div>
        <li>
          <Link to='/'>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to='/menu'>
            {" "}
            <FaTable /> Menu
          </Link>
        </li>
        <li>
          <Link to='/order/salad'>
            {" "}
            <FaBabyCarriage /> Order
          </Link>
        </li>
        <li>
          <Link to='/about'>
            {" "}
            <FaAddressBook /> About
          </Link>
        </li>
        <li>
          <Link to='/secret'>
            {" "}
            <FaServicestack /> Secret
          </Link>
        </li>
      </div>
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>BB-DashBoard</title>
      </Helmet>

      <div className='drawer lg:drawer-open bg-base-200'>
        <input
          id='my-drawer-2'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content w-full  items-center  '>
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'>
            Open drawer
          </label>
        </div>

        <div className='drawer-side  bg-orange-400 '>
          <label
            htmlFor='my-drawer-2'
            className='drawer-overlay'></label>
          <Link
            to='/'
            className='btn btn-ghost my-8 normal-case shadow-lg text-4xl '>
            BISTRO <span className='italic text-xs text-black font-extrabold'>Boss</span>{" "}
          </Link>
          <ul className='text-xl menu p-4 w-80 min-h-full    text-base-content bg-orange-400'>
            {/* Sidebar content here */}
            {sideOption}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
