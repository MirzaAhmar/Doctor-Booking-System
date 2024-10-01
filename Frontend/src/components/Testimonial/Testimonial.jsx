import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Star, patientAvatar } from '../../assets/images';


const Testimonial = () => {
    return (
        <section id='testimonial'>
            <div className="container">
                <div className='testimonialContent'>
                    <h2>What our patient say</h2>
                    <p>World-class care for everyone. Our health systems offers unmatched, expert health care.</p>
                </div>
                <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                >

                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4>Talha Aslam</h4>
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                                <img src={Star} alt="Star" />
                            </div>
                        </div>
                        <p>"I have taken medical services from them. They treat so well and they are provding the best medical services</p>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
