

const ClientReviews = () => {
    return (
        <div
        data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        className='container mx-auto'>
            <section className="my-24 flex flex-col lg:flex-row gap-12 rounded-xl bg-gradient-to-r from-[#FD650B] to-[#FFB400] lg
            lg:px-16 p-12 lg:py-24 w-96 md:w-full lg:w-full">

                <div className="flex items-center lg:pr-28">
                    <div className="space-y-5">
                        <h2 className="text-5xl text-white poppins-semibold">
                            Meet Our Super <br /> Clients
                        </h2>
                        <p className="text-white poppins-regular">Discover authentic insights from our valued customers about their real estate experiences. Explore genuine feedback that showcases our commitment to exceptional service and satisfaction</p>
                        <button className="btn text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Show All</button>
                    </div>
                </div>

                {/* review container */}
                <div className="relative">
                    {/* next review */}
                    <div className="relative z-10 mb-16 opacity-40 p-10 rounded-lg bg-white">
                        <img className="absolute w-[70px] -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/ZWy6gKH/client.png"} alt="" />
                        <p className="poppins-regular">Exceptional service, surpassed expectations. Highly recommended for their professionalism and expertise. A pleasure to work with</p>
                        <h4 className="mt-5 font-bold">Ilham Yuda</h4>
                        <p className="font-medium">Businessman</p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>

                    {/* current review */}
                    <div className="absolute z-20 top-40 lg:-left-28 lg:w-[430px] p-10 rounded-lg bg-white">
                        <img className="absolute w-[70px] -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/stYKWSc/client1.png"} alt="" />
                        <p className="poppins-regular">Efficient and reliable team. Smooth process from start to finish. Exceeded our expectations. Highly recommend their services.</p>
                        <h4 className="mt-5 font-bold">Sarah Islam</h4>
                        <p className="font-medium">CEO of KF</p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>

                    {/* previous review */}
                    <div className="relative z-10 opacity-40 p-10 rounded-lg bg-white">
                        <img className="absolute w-[70px] -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/6Xf1QjY/clienst2.jpg"} alt="" />
                        <p className="poppins-regular">Outstanding professionalism and expertise. Seamless process and excellent service. Highly recommend for anyone seeking top-quality real estate assistance.</p>
                        <h4 className="mt-5 font-bold">Mickle Joseph</h4>
                        <p className="font-medium">Govt. Service Holder </p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ClientReviews;