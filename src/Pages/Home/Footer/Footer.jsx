import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
            className="footer md:w-full lg:w-full w-96   text-black p-10 bg-[#FFF7F0]">
            <aside>
                <img src={logo} alt="" />
                <p className='poppins-medium'>Home Hive Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title poppins-medium'">Services</h6>
                <a className="link link-hover poppins-regular">Property Listings</a>
                <a className="link link-hover poppins-regular">Mortgage Assistance</a>
                <a className="link link-hover poppins-regular">Property Management</a>
                <a className="link link-hover poppins-regular">Real Estate Consultation</a>
            </nav>
            <nav>
                <h6 className="footer-title poppins-medium">Company</h6>
                <a className="link link-hover poppins-regular">About us</a>
                <a className="link link-hover poppins-regular">Contact</a>
                <a className="link link-hover poppins-regular">Team Members</a>
                <a className="link link-hover poppins-regular">Client Testimonials</a>
            </nav>
            <nav>
                <h6 className="footer-title poppins-medium">Legal</h6>
                <a className="link link-hover poppins-regular">Terms of use</a>
                <a className="link link-hover poppins-regular">Privacy policy</a>
                <a className="link link-hover poppins-regular">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;