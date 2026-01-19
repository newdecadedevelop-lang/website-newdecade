'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link"

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

		breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };

export default function Testimonial9() {
    return (
        <>

            <div className="testimonial9-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-auto">
                            <div className="testimonial6-header text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">What Our Clients Say</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Trusted by Families Across California</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1300}>
                            <Swiper {...swiperOptions} className="testimonials9-carousel-area owl-carousel">
                                <SwiperSlide className="testimnials9-boxarea ts">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9 ts">"I've been with New Decade for over 10 years. They always find me the best rates and the staff speaks Spanish which makes everything so much easier. Highly recommend!"</p>
                                    <div className="teimonials9-flex9 ts">
                                        <div className="testimonialmans ts">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial ts">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block ts">Maria G.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500 ts">Van Nuys, CA</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg ts" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">"When I had an accident on my record, other companies wouldn't help me. New Decade found me affordable coverage and treated me with respect. They truly care about their clients."</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Carlos R.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Panorama City, CA</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">"As a small business owner, I needed commercial auto insurance for my fleet. The team took the time to understand my needs and got me great coverage at a fair price."</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Roberto M.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">San Fernando Valley</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">"The personal attention I receive here is amazing. They call me before my policy renews and always make sure I have the best deal. It's like having family looking out for you."</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Ana L.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Los Angeles, CA</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">"My whole family uses New Decade for our insurance. They've been reliable and trustworthy for years. When we have questions, they answer right away. Great service!"</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Jorge S.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">North Hollywood, CA</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">"I switched to New Decade after a friend recommended them. Best decision ever! They saved me money and the service is so much more personal than those big insurance companies."</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Patricia H.</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Burbank, CA</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor60.png" alt="" className="elementors60" />
            </div>
        </>
    )
}
