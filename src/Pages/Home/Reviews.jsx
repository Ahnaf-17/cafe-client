import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'what our client say'}
                heading={'testimonials'}
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(rev => <SwiperSlide key={rev._id}>
                        <div className="mx-24 my-16 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rev.rating}
                                readOnly
                            />
                            <p className="py-3">{rev.details}</p>
                            <h3 className="text-2xl text-orange-400">{rev.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;