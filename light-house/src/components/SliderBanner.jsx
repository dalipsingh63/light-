// import React, { useState, useEffect, useRef } from "react";

// export const Banner = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   // Auto slide
//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [images]);

//   if (!images || images.length === 0) return null;

//   // Swipe Handlers
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const delta = touchStartX.current - touchEndX.current;
//     if (delta > 50) {
//       // Swipe left → next
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     } else if (delta < -50) {
//       // Swipe right → previous
//       setCurrentIndex((prev) =>
//         prev === 0 ? images.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Image */}
//       <img
//         src={images[currentIndex]}
//         alt={`banner-${currentIndex}`}
//         className="w-full h-full object-cover transition-all duration-700"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Center Text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//         <div className="text-white max-w-3xl">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
//             Clean & Green Solar Energy
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg opacity-90">
//             Save electricity bills with reliable solar solutions
//           </p>
//         </div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
//               idx === currentIndex ? "bg-white" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



// SliderBanner.js
import React, { useState, useEffect, useRef } from "react";

export const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide
  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  // Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (delta < -50) {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`banner-${currentIndex}`}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
            Clean & Green Solar Energy
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90">
            Save electricity bills with reliable solar solutions
          </p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
