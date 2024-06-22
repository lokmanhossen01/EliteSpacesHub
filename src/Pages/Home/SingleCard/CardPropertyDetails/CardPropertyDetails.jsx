import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const CardPropertyDetails = () => {

    const propertyDetails = useLoaderData();
    console.log("Property Details:", propertyDetails);

    const { id } = useParams();

    const propertyDetail = propertyDetails.find(property => property.id === parseInt(id));



    const { image,
        estate_title,
        description,
        segment_name,
        price,
        status,
        area,
        location,
        facilities,

    } = propertyDetail;




    return (

        <section className="dark:bg-gray-100 dark:text-gray-800">

            <Helmet>
                <title>Home Hive | Property Details </title>
            </Helmet>

            <div className="container flex flex-col justify-center p-2 lg:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                <div className="flex items-center justify-center lg:p-6 mt-8 lg:mt-0  lg:h-96 xl:h-112 2xl:h-128">
                    <img src={image} alt="" className="object-contain rounded-lg  lg:h-96 xl:h-112 2xl:h-128" />
                </div>

                <div className="flex flex-col justify-center lg:p-4 p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">


                    <h1 className="text-2xl poppins-bold leading-none sm:text-3xl">
                        {estate_title}
                    </h1>

                    <p className="mt-6 mb-8 text-lg sm:mb-4 poppins-medium">{description}
                    </p>
                    <hr />

                    <p className="poppins-regular mt-4">Category : <span className="poppins-semibold "> {segment_name}</span></p>
                    <p className="poppins-regular">Area : <span className="poppins-semibold"> {area}</span></p>

                    <div className="flex justify-center items-center gap-2">
                        <IoLocationSharp></IoLocationSharp>
                        <p className="poppins-semibold">
                            {location}
                        </p>
                    </div>
                    <div className="mt-4 mb-4">
                        <h3 className="poppins-regular">Facilities: </h3>


                        {
                            facilities.map((facility, index) => <li className="poppins-semibold" key={index}> {facility}</li>)
                        }


                    </div>

                    <hr />
                    <div className="flex mt-4 mb-4 justify-between items-center">
                        <p className="text-xl poppins-regular"><span className="btn poppins-regular text-white rounded-full bg-gradient-to-r from-[#FD650B] to-[#FFB400]">{status}</span></p>
                        <p className="text-xl btn text-white poppins-regular rounded-full bg-gradient-to-r from-[#FD650B] to-[#FFB400]">{price}</p>
                    </div>
                    <hr />

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">


                        <button className="px-8 mt-4 btn text-lg bg-gradient-to-r from-[#FD650B] to-[#FFB400] text-white font-semibold border  dark:border-gray-800">Add to Cart</button>

                    </div>

                </div>

            </div>
        </section>























        // <div className="card mt-10 container mx-auto lg:card-side bg-base-100 shadow-xl">
        //     <figure>
        //         <img src={image} alt="property" />
        //         </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{estate_title}</h2>
        //         <p>Click the button to listen on Spotiwhy app.</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Listen</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CardPropertyDetails;