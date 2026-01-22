// src/pages/Home.jsx
import React from "react";
import UserBanner from "../components/UserBanner";
import HomeCards from "../components/HomeCards";
import HomeVideos from "../components/HomeVideos";
import HomeImageSlider from "../components/HomeImageSlider";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    // ✅ Navbar fixed padding
    <div className="pt-18 md:pt-22">

      {/* 🔥 Banner */}
      <section className="m-0 p-0">
        <UserBanner />
      </section>

      {/* 🧩 Cards */}
      <section className="pt-0 pb-6 bg-gray-50 m-0">
        <div className="max-w-7xl mx-auto px-4">
          <HomeCards />
        </div>
      </section>

      {/* 🎬 Videos */}
      <section className="pt-0 pb-2 m-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            𝓽𝓻𝓪𝓭𝓲𝓷𝓰 𝓼𝓸𝓵𝓪𝓻 𝓼𝔂𝓼𝓽𝓮𝓶
          </h2>
          <HomeVideos />
        </div>
      </section>

      {/* 🖼️ Image Slider */}
      <section className="pt-0 pb-2 bg-gray-50 m-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            𝔀𝓸𝓻𝓴 𝓪𝓷𝓭 𝓶𝓪𝓲𝓷𝓽𝓮𝓷𝓪𝓷𝓬𝓮
          </h2>
          <HomeImageSlider />
        </div>
      </section>

      {/* 💬 WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
