import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



AOS.init();

const Root = () => {
    
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />

           
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;