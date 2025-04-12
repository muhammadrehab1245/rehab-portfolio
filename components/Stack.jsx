import { techStack } from "@/utils/impobj";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const Stack = () => {
  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={3}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 200 }}
      pagination={{ clickable: true }}
      direction="horizontal"
      className="mySwiper"
    >
      {techStack.map((tech, index) => (
        <SwiperSlide key={index} className="flex mt-4 justify-center">
          <div className="flex flex-col gap-y-3 rounded-lg shadow-lg shadow-[#5b22c5] h-[190px] w-[80%] bg-gray-900 border-2 border-[#5a31a6] items-center justify-center">
            <img
              className="w-[140px] aspect-6/4"
              src={tech.image}
              alt={tech.name}
            />
            <h1
              style={{ textShadow: "3px 2px #5709e8" }}
              className="text-white text-xl  "
            >
              {tech.name}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Stack;
