import { Link } from "react-router-dom";


const SingleCard = ({ card }) => {
    const { image,
        facilities,
        estate_title,
        price,
        id,
        status,
        description
    } = card;


    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="card  w-96 bg-[#FFF7F0] shadow-lg">

            <figure className="mt-5 ">
                <img className="rounded-lg" src={image} alt="property" />
            </figure>
            <div className="card-body">
                <h2 className="poppins-semibold text-2xl">
                    Property Name:
                </h2>
                <h2 className="card-title "><span className="poppins-medium">{estate_title}</span></h2>

                <div className="flex justify-between items-center">
                    <p className="text-xl poppins-regular"><span className="btn poppins-regular text-white rounded-full bg-gradient-to-r from-[#FD650B] to-[#FFB400]">{status}</span></p>
                    <p className="text-xl btn text-white poppins-regular rounded-full bg-gradient-to-r from-[#FD650B] to-[#FFB400]">{price}</p>
                </div>
                <p className="poppins-regular">
                    {description}
                </p>
                <h3 className="text-2xl poppins-semibold">Facilities : </h3>

                {
                    facilities.map((facility, index) => <li className="poppins-regular" key={index}> {facility}</li>)
                }

                <div className="card-actions">
                    <Link to={`/card_property_details/${id}`} className="btn poppins-regular rounded- text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400] ">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;