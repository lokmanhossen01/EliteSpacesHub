import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser,
         logIn,
          userDetails,
           logOut  } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    // const [successRegister, setSuccessRegister] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');


        setPasswordError("")

        if (password !== confirmPassword) {
            setPasswordError("Password did not match !!");
            return
        }

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }


        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must be at least one uppercase letter.");
            return;
        }


        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must be at least one lowercase letter.");
            return;
        }


        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Registration Successfully');
                logOut();
                navigate("/login");


                //update profile

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL

                })
                    .then(() => console.log('profile update'))
                    .catch()


            })
            .catch(error => {
                console.error(error)
               
            })
        


    }



    return (
        <div
        data-aos="flip-up"
        data-aos-duration="1000"
        className="bg-[#FFF7F0] mb-6 mt-10 rounded-xl container mx-auto hero-content flex-col">

            <Helmet>
                <title>Home Hive | Register </title>
            </Helmet>

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Please Register Here</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Name</span>
                    </label>

                    <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Email address</span>
                    </label>

                    <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Photo URL</span>
                    </label>

                    <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" />
                </div>

                <div className="form-control relative">

                    <label className="label poppins-semibold">
                        <span className="label-text">Password</span>
                    </label>

                    <input name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="input input-bordered"
                        required />

                    <span className="absolute top-12 right-4" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                        }
                    </span>


                </div>
                <div className="form-control relative">

                    <label className="label poppins-semibold">
                        <span className="label-text">Confirm Password</span>
                    </label>

                    <input name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="input input-bordered"
                        required />

                    <span className="absolute top-12 right-4" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                        }
                    </span>


                </div>

                {
                    passwordError && <p className="text-red-700 poppins-medium">{passwordError}</p>
                }

                <div className="form-control mt-6">
                    <button className="btn  text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400] outline-none ">Register</button>

                    <p className="text-center mt-2 poppins-medium">Already Have An Account ? <Link className="text-red-500" to='/login'>Please Login </Link></p>

                </div>
            </form>
            <Toaster position="top-center" reverseOrder={false} />

        </div>
    );
};

export default Register;