import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (


        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className='w-[500px] md:w-[768px] lg:w-[1024px] xl:w-[1280] 2xl:w-[1536px]  '>
                <SwiperSlide>

                    <div
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                      className="hero min-h-screen "
                       style={{ backgroundImage: 'url(https://i.ibb.co/4SX3wXs/banner1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                             className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"

                    className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/XJjMbf7/banner2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/fvNqW9w/banner3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div
                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                            className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;