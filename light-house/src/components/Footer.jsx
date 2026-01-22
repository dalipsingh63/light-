import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white mt-0 pt-10 md:pt-12 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔹 BRAND */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            𝓚𝓤𝓢𝓤𝓜 𝓢𝓞𝓛𝓐𝓡 𝓔ⓝ𝓔ⓝ𝓡𝓖𝓨
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-300">
            𝓢𝓞𝓛𝓐𝓡 your way with trust & quality
          </p>

          {/* 🔹 SOCIAL LINKS */}
          <div className="flex justify-center gap-6 mt-3 md:mt-4 text-gray-300 text-base md:text-lg">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* 🔹 CONTACT */}
        <div className="text-center mb-6 md:mb-8 text-gray-300 space-y-2 md:space-y-3 text-base md:text-lg">
          <a
            href="tel:+917740972863"
            className="block font-semibold hover:text-yellow-400 transition"
          >
            📞 Call Now: +91 7740972863
          </a>
          <a
            href="https://wa.me/917740972863"
            target="_blank"
            rel="noreferrer"
            className="block font-semibold hover:text-yellow-400 transition"
          >
            💬 WhatsApp Chat
          </a>
          <a
            href="mailto:contact@lighthouse.com"
            className="block font-semibold hover:text-yellow-400 transition"
          >
            ✉️ Email Us
          </a>
          <p>📍 Jaipur, Rajasthan, India</p>
        </div>

        {/* 🔹 MAP → Clickable gradient + pin + hover effect */}
        <div className="max-w-5xl mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=26.941107,75.753717"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full h-64 md:h-80 cursor-pointer rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700"></div>

            {/* Pin icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <HiLocationMarker className="text-red-500 text-6xl md:text-8xl animate-bounce" />
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-md text-white text-base md:text-lg font-semibold">
              📍 Click to open on Google Maps
            </div>
          </a>
        </div>

        {/* 🔹 COPYRIGHT */}
        <div className="text-center text-gray-400 text-base md:text-lg border-t border-gray-500 pt-3 md:pt-4">
          © {new Date().getFullYear()} 𝓚𝓤𝓢𝓤𝓜 𝓢𝓞𝓛𝓐𝓡. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
