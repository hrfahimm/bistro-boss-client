/** @format */

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAuxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });
    const handleMakeAdmin = (user) => {
        fetch(
            `https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/users/admin/${user._id}`,
            {
                method: "PATCH",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "  Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
                    console.log("deleted res", res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            "Deleted!",
                            "Your user has been deleted.",
                            "success"
                        );
                    }
                });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>BB-All Users </title>
            </Helmet>
            <div className='text-center p-8 mx-auto items-center mt-8 '>
                <h3 className='text-3xl font-semibold uppercase  text-red-600 mb-8 '>
                    {" "}
                    Total User: {users.length}{" "}
                </h3>
                <div className='overflow-x-auto  font-bold   '>
                    <table className='table table-zebra'>
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-lg text-black '>#</th>
                                <th className='text-lg text-black '>Name</th>
                                <th className='text-lg text-black '>Email</th>
                                <th className='text-lg text-black '>Role</th>
                                <th className='text-lg text-black '>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === "admin" ? (
                                            "admin"
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    handleMakeAdmin(user)
                                                }
                                                className='btn btn-ghost bg-orange-600  text-white'>
                                                <FaUserShield></FaUserShield>
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className='btn btn-ghost bg-red-600  text-white'>
                                            <FaTrashAlt></FaTrashAlt>
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

export default AllUsers;
