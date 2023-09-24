/** @format */

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
//import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(
            "https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/reviews"
        )
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <section className='my-20'>
            <SectionTitle
                subHeading='What Our Client Said'
                heading='Testimonial'></SectionTitle>

            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'>
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className=' flex flex-col items-center  my-16 mx-24'>
                            <Rating
                                className='text-center'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 pt-4 uppercase'>
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
