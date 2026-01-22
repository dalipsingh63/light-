import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Owners / Founders
const owners = [
  {
    name: "Dalip Singh",
    role: "Founder & Owner",
    phone: "7740972863",
    whatsapp: "7740972863",
    img: "/images/dalip.jpg",
  },
  {
    name: "Akhilesh Singh",
    role: "Co-Founder & Owner",
    phone: "7740972863",
    whatsapp: "7740972863",
    img: "/images/akhilesh.jpg",
  },
];

// Company Stats
const stats = [
  { icon: "☀️", title: "Projects Completed", value: "500+" },
  { icon: "👨‍👩‍👧‍👦", title: "Happy Customers", value: "1000+" },
  { icon: "⚡", title: "Solar Panels Installed", value: "2000+" },
  { icon: "🛠️", title: "Years of Experience", value: "10+" },
];

// Mission / Vision
const missionVision = [
  {
    icon: "🎯",
    title: "What We Do",
    desc: "We design and install reliable solar systems for homes, shops, offices, and industries — focused on long-term savings and quality work.",
  },
  {
    icon: "🌱",
    title: "Why We Do It",
    desc: "Electricity costs are rising every year. Solar is a smart and clean solution — and we help people switch without confusion or stress.",
  },
  {
    icon: "🤝",
    title: "How We Work",
    desc: "Clear guidance, honest pricing, proper installation, and support even after the system is live. No shortcuts.",
  },
];

const About = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4 sm:mb-6">
          Built on Trust. Powered by Solar.
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          We are a solar solutions company focused on practical, affordable, and long-lasting solar systems.
          From small homes to large industrial setups, our goal is simple — deliver honest work that actually saves money.
        </p>
      </div>

      {/* Mission / Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-32 text-center">
        {missionVision.map((item, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition transform hover:-translate-y-1 duration-300"
          >
            <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 sm:mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Owners */}
      <div className="mb-16 sm:mb-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-4">
          Meet the People Behind the Work
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
          We believe customers should know who they are dealing with.  
          No hidden faces — direct contact, direct responsibility.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {owners.map((owner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 duration-500 text-center"
            >
              <img
                src={owner.img}
                alt={owner.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-blue-600">{owner.name}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{owner.role}</p>

              <div className="flex justify-center space-x-6 text-xl sm:text-2xl">
                <a
                  href={`tel:${owner.phone}`}
                  className="text-blue-600 hover:text-blue-800 transition"
                  title="Call Now"
                >
                  <FaPhoneAlt />
                </a>
                <a
                  href={`https://wa.me/${owner.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center mb-16 sm:mb-32">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-2xl p-4 sm:p-6 hover:bg-blue-100 transition transform hover:-translate-y-1 duration-300"
          >
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">{stat.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700">{stat.value}</h3>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative bg-cover bg-center rounded-3xl text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/60 p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Thinking About Solar?
          </h2>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl text-blue-100">
            Call or WhatsApp us directly. No pressure. Clear answers only.
          </p>
          <a
            href="tel:7740972863"
            className="inline-block bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105 duration-300 text-sm sm:text-base"
          >
            Talk to Us Now
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
