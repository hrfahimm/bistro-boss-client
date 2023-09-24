/** @format */

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password).then((result) => {
            const LoggedUser = result.user;

            console.log(LoggedUser);

            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email };
                    fetch(
                        "https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/users",
                        {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser),
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "user profile update",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate("/");
                            }
                        });

                    console.log("user profile update");
                })
                .catch((error) => console.log(error));
        });
    };

    return (
        <>
            <Helmet>
                <title>BB-Signup</title>
            </Helmet>

            <div className='hero min-h-screen bg-base-200 '>
                <div className='hero-content flex  md:flex-wrap mt-28'>
                    <div className='text-center   md:w-1/2  py-8'>
                        <h1 className='text-5xl font-bold'>SignUP now!</h1>
                        <p className=' mx-12 py-6'>
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className='card md:w-1/2 max-w-sm shadow-2xl bg-base-100'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    {...register("name", { required: true })}
                                    placeholder='name'
                                    className='input input-bordered'
                                />
                                {errors.name && (
                                    <span className='text-red-500 text-xs py-2'>
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Photo Url
                                    </span>
                                </label>
                                <input
                                    placeholder='Photo url'
                                    type='text'
                                    {...register("photoURL", {
                                        required: true,
                                    })}
                                    className='input input-bordered'
                                />
                                {errors.photoURL && (
                                    <span className='text-red-500 text-xs py-2'>
                                        Photo URL is Rwquar
                                    </span>
                                )}
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    {...register("email", { required: true })}
                                    placeholder='email'
                                    className='input input-bordered'
                                />
                                {errors.email && (
                                    <span className='text-red-500 text-xs py-2'>
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Password</span>
                                </label>
                                <input
                                    type='password'
                                    placeholder='password'
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    className='input input-bordered'
                                />

                                {errors.password?.type === "required" && (
                                    <p className='text-red-600 text-xs py-2'>
                                        Password is required
                                    </p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-600 text-xs py-2'>
                                        Password must be 6 characters
                                    </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-600 text-xs py-2'>
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-600 text-xs py-2'>
                                        Password must have one Uppercase one
                                        lower case, one number and one special
                                        character.
                                    </p>
                                )}
                                <label className='label'>
                                    <a
                                        href='#'
                                        className='label-text-alt link link-hover'>
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className='form-control m-2'>
                                <input
                                    className='btn btn-primary'
                                    type='submit'
                                    value='SignUp'
                                />
                            </div>
                        </form>
                        <p className='text-center  font-bold '>
                            <small>
                                I have An Account
                                <Link to='/login'>
                                    {" "}
                                    <span className='text-red-700 px-2 '>
                                        Login !
                                    </span>
                                </Link>
                            </small>
                        </p>
                        <SocialLogin text={"SignUp"}></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

//!1Qqaser
