import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="card  mb-6 mx-auto mt-10 text-center w-96 border-2 border-[] bg-[#FFF7F0] shadow-xl">

            <Helmet>
                <title>Home Hive | User Profile </title>
            </Helmet>

            <figure className="px-10 pt-10">
                <img src={user?.photoURL || 'user img not found'} alt="user" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title poppins-semibold">Name : {user?.displayName || 'name not found'}</h2>
                <p className="poppins-medium">Email : {user.email || 'Email not found'}</p>

            </div>
        </div>
    );
};

export default UserProfile;