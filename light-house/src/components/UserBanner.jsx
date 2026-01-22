// import React, { useState, useEffect } from "react";
// import { Banner } from "./SliderBanner";
// import { getAllBanners } from "../services/banner";

// const UserBanner = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const res = await getAllBanners();

//         const activeImages = res.data
//           .filter((b) => b.isActive)
//           .map((b) => b.url);

//         setImages(activeImages);
//       } catch (err) {
//         console.error("Error fetching banners:", err);
//       }
//     };

//     fetchBanners();
//   }, []);

//   if (!images.length) return null;

//   return (
//     // ❌ NO margin / padding here
//     <div className="w-full">
//       <Banner images={images} />
//     </div>
//   );
// };

// export default UserBanner;


// UserBanner.js
// UserBanner.js
import React, { useState, useEffect } from "react";
import { Banner } from "./SliderBanner";
import { getAllBanners } from "../services/banner";

const UserBanner = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getAllBanners();
        const activeImages = res.data
          .filter((b) => b.isActive)
          .map((b) => b.url);
        setImages(activeImages);
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
    fetchBanners();
  }, []);

  if (!images.length) return null;

  return (
    // ✅ Zero gap under fixed navbar using negative margin
    <div className="w-full -mt-16 md:-mt-20">
      <Banner images={images} />
    </div>
  );
};

export default UserBanner;
