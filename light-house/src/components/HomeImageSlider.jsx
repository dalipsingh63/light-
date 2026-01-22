// src/components/HomeImageSlider.jsx
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: "/images/solar1.avif", title: "Save up to 40% on electricity bills", desc: "High efficiency solar panels for your home" },
  { img: "/images/solar2.avif", title: "Eco-friendly Solar Solutions", desc: "Smart and sustainable energy for everyone" },
  { img: "/images/solar3.avif", title: "Durable & Reliable", desc: "Premium solar installations that last" },
  { img: "/images/solar4.avif", title: "Smart Solar Technology", desc: "Monitor your energy production easily" },
  { img: "/images/solar5.avif", title: "Industrial Solar Panels", desc: "Energy solutions for factories & businesses" },
  { img: "/images/solar6.avif", title: "Sun-Powered Efficiency", desc: "Panels optimized for maximum sunlight" },
  { img: "/images/solar7.avif", title: "Green Energy Fields", desc: "Eco-friendly solar farms across the country" },
  { img: "/images/solar8.avif", title: "Smart Solar Monitoring", desc: "Control & monitor your solar panels easily" },
];

const HomeImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) nextSlide();
    else if (deltaX < -50) prevSlide();
  };

  return (
    <div className="max-w-6xl mx-auto mt-0 relative">

      <div
        className="
          w-full
          h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]
          relative overflow-hidden rounded-xl shadow-lg
        "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-center bg-cover scale-105"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Image */}
            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="relative z-10 w-full h-full object-contain"
            />

            {/* Text */}
            <div className="absolute inset-0 z-20 flex items-center justify-center px-3">
              <div className="bg-black/60 rounded-lg px-4 py-2 md:px-6 md:py-3 text-center max-w-xl">
                <h2 className="text-white text-base sm:text-lg md:text-2xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base mt-1">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-1 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImageSlider;
