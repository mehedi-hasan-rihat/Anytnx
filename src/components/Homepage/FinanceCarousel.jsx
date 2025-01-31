import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./FinanceCurousel.css";
import FinanceCard from "./FinanceCard.jsx";
import { Pagination } from "swiper/modules";

export default function FinanceCarousel() {
    const slides = [
        {
          title: "Financial Services",
          subTitle: "Customer focused",
          discLight: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
          discDark: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
          img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format",
        },
        {
            title: "Financial Services",
            subTitle: "Customer focused",
            discLight: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
            discDark: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
            img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format",
          },
        {
          title: "Investment Banking",
          subTitle: "Strategic Growth",
          discLight: "Unlock new investment opportunities with AI-driven insights and market analytics.",
          discDark: "Empower businesses with data-driven financial strategies for optimal growth.",
          img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format",
        },
        {
          title: "Wealth Management",
          subTitle: "Secure Future",
          discLight: "Tailored financial planning for long-term wealth accumulation and security.",
          discDark: "Build your financial future with expert guidance and personalized strategies.",
          img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format",
        },
      ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + slides[index].subTitle + "</span>";
    },
  };

  return (
    <div className="pb-96 relative">

<div className="text-center mt-56">
    <p className="font-bold text-[#1f80f0] uppercase  montserrat-font mb-6">TECHNOLOGY BUILT FOR YOU</p>
    <h3 className="font-semibold text-[#0B304B] leading-[61px] text-[56px]  montserrat-font">The future of finance</h3>
</div>


<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        speed={600}
      >
        {slides.map((arr) => (
          <SwiperSlide>
            <FinanceCard
              title="Purpose-built financial services"
              subTitle="Customer focused"
              discLight="Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities."
              discDark="Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system."
              img="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=320&auto=format"
            />
          </SwiperSlide>
        ))}
      </Swiper>
</div>
  
  );
}
