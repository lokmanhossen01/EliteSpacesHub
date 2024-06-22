import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";




const UpdateProfile = () => {

    const { userUpdateProfile, user, setUser } = useContext(AuthContext);
    
     const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL ] = useState('');
 

    const handleUpdateProfile = () => {
      
        userUpdateProfile(displayName, photoURL)
            .then(() => {
                console.log('Updated Successfully')
                toast.success('Updated Successfully');
                setUser({...user, displayName, photoURL})
            })
            .catch((error) => {
                console.error(error);
            })

    }



     return (
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="bg-[#FFF7F0] mb-6 mt-10 rounded-xl container mx-auto hero-content flex-col">

            <Helmet>
                <title>Home Hive | Update Profile </title>
            </Helmet>

            <h2 className="text-4xl mt-8   text-center poppins-bold ">Update Profile</h2>

            <form className="card-body md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        name="name"
                        type="text"
                        placeholder="Update"
                        className="input input-bordered"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required />
                </div>

                <div className="form-control">

                    <label className="label poppins-semibold">
                        <span className="label-text">Photo URL</span>
                    </label>

                    <input
                        name="photoURL"
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        required />


                </div>

                <div className="form-control mt-6">
                    <button onClick={handleUpdateProfile} className="btn btn-primary text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400] outline-none ">Save</button>

                    <p className="text-center mt-2 poppins-medium">Do not Have An Account ? <Link className="text-red-500" to='/register'>Please Register</Link></p>

                </div>
            </form>


        </div>
    );
};

export default UpdateProfile;