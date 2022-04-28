import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Josh",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nullaearum qui nisi sint obcaecati delectus et libero laborum magnamdoloribus distinctio minus deserunt quos voluptatum, vel, harum odit? Perspiciatis, accusantium.",
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Josh",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nullaearum qui nisi sint obcaecati delectus et libero laborum magnamdoloribus distinctio minus deserunt quos voluptatum, vel, harum odit? Perspiciatis, accusantium.",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Josh",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nullaearum qui nisi sint obcaecati delectus et libero laborum magnamdoloribus distinctio minus deserunt quos voluptatum, vel, harum odit? Perspiciatis, accusantium.",
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: "Josh",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nullaearum qui nisi sint obcaecati delectus et libero laborum magnamdoloribus distinctio minus deserunt quos voluptatum, vel, harum odit? Perspiciatis, accusantium.",
  },
];

export const Testimonials = () => {
  const content = data.map((item) => {
    return (
      <SwiperSlide className="testimonial" key={item.id}>
        <div className="client__avatar">
          <img src={item.avatar} alt="Client avatar" />
        </div>
        <h5 className="client__name">{item.name}</h5>
        <small className="client__review">
          <p>{item.review}</p>
        </small>
      </SwiperSlide>
    );
  });
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {content}
      </Swiper>
    </section>
  );
};
