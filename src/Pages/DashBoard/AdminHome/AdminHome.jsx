/** @format */

import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/UseAuxiosSecure";
import Barchart from "../Graph/Barchart";
import Pichart from "../Graph/Pichart";
import { Link } from "react-router-dom";
const AdminHome = () => {
    const { user } = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure("/admin-stats");
            return res.data;
        },
    });

    return (
        <div>
            <div className='w-full m-4   text-center'>
                <h1 className='text-2xl font-bold text-orange-500'>
                    ---- Wellcome Back ----
                </h1>
                <h1 className='text-4xl my-10 font-bold  text-gray-500 '>
                    - {user.displayName} -
                </h1>
            </div>

            <div className='text-center mt-8'>
                <div className='stats shadow'>
                    <div className='stat'>
                        <div className='stat-figure text-secondary'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block w-8 h-8 stroke-current'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                            </svg>
                        </div>
                        <div className='stat-title text-xl'>Revenu</div>
                        <div className='stat-value p-4'> ${stats.revenue}</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-figure text-secondary'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block w-8 h-8 stroke-current'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'></path>
                            </svg>
                        </div>
                        <div className='stat-title text-xl'>Users</div>
                        <div className='stat-value p-4'>
                            <Link to='/dashboard/allusers'>{stats.users}</Link>
                        </div>
                    </div>
                    <div className='stat'>
                        <div className='stat-figure text-secondary'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block w-8 h-8 stroke-current'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'></path>
                            </svg>
                        </div>
                        <div className='stat-title text-xl'>Menu Items</div>
                        <div className='stat-value p-4'>
                            <Link to='/dashboard/manageitems'>
                                {" "}
                                {stats.products}
                            </Link>
                        </div>
                    </div>
                    <div className='stat'>
                        <div className='stat-figure text-secondary'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block w-8 h-8 stroke-current'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'></path>
                            </svg>
                        </div>
                        <div className='stat-title text-xl'>Orders</div>
                        <div className='stat-value p-4'>{stats.orders}</div>
                    </div>
                </div>
                <div className='flex'>
                    <Barchart />
                    <Pichart />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
