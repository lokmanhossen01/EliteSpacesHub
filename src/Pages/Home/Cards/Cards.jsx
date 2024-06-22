import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Cards = () => {

    const [propertyCards, setPropertyCards] = useState([]);


    useEffect(() => {
        fetch('/homeHive.json')
            .then(res => res.json())
            .then(data => setPropertyCards(data))
    }, []);

    // console.log(propertyCards);

    return (
        <div className="container mx-auto">

            <div
            data-aos="fade-right"
            
            className="text-center ml-16 mb-16 mt-12">
                <h2 className="text-5xl poppins-semibold">Properties For Sale & Rent</h2>
                <p className="poppins-regular mt-4">Find your ideal property – for sale or rent. Explore our diverse listings <br /> and discover the perfect place to call home.</p>
            </div>

            <div className=" grid  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    propertyCards.map(card => <SingleCard
                        card={card}
                        key={card.id}
                    ></SingleCard>)
                }

            </div>
        </div>
    );
};

export default Cards;