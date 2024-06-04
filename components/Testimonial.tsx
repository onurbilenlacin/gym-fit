"use client";
import { FaQuoteLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
const testimonialData = [
    {
        img: "/assets/img/testimonial/lucy.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Lucy Anthony"
    },
    {
        img: "/assets/img/testimonial/michael.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Michael Smith"
    },
    {
        img: "/assets/img/testimonial/maria.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Maria Garcia"
    },
    {
        img: "/assets/img/testimonial/lucy.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Lucy Anthony"
    },
    {
        img: "/assets/img/testimonial/michael.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Michael Smith"
    },
    {
        img: "/assets/img/testimonial/maria.jpg",
        message:
            "I have been a member for over 10 years. I have been able to maintain my health and fitness even as I age. The staff are friendly and the facilities are always clean and well maintained.",
        name: "Maria Garcia"
    }
];

const Testimonial = () => {
    return (
        <section className="py-12 xl:py-28" id="testimonial">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h2 text-center mb-12"
                >
                    Our Testimonials
                </motion.h2>
            </div>
            <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="h-[320px]"
                >
                    {testimonialData.map((person, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="flex flex-col justify-center items-center gap-6 text-center">
                                <Image
                                    src={person.img}
                                    alt={person.name}
                                    className="rounded-full border-2 border-accent"
                                    width={90}
                                    height={90}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <FaQuoteLeft className="text-2xl text-gray-300" />
                                <p className="max-w-[380px] mb-4">
                                    {person.message}
                                </p>
                                <span className="text-2xl text-accent ">
                                    {person.name}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
};

export default Testimonial;
