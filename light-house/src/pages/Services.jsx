import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Service Data
const servicesData = [
  {
    id: "home",
    title: "Home Solar",
    icon: "☀️",
    img: "https://media.istockphoto.com/id/2218821546/photo/morning-aerial-view-of-residential-community-in-utah-usa.webp?a=1&b=1&s=612x612&w=0&k=20&c=Siqz5kVvSthR7nAxO1YccxB4KPhRl9Y8C_w58HOm6xU=",
    points: [
      "Rooftop solar panel installation",
      "Reduce electricity bills",
      "Clean & renewable energy",
      "Low maintenance system",
      "10-year warranty",
      "Free consultation & design",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    icon: "🏢",
    img: "https://plus.unsplash.com/premium_photo-1666345067885-974ecb6d4efd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Solar for shops & offices",
      "Lower monthly power cost",
      "High efficiency panels",
      "Long-term savings",
      "Custom solutions for each business",
      "Smart monitoring system",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    icon: "🏭",
    img: "https://images.unsplash.com/photo-1642950863398-1fc3600a5313?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Large-scale solar systems",
      "High power output",
      "Reliable factory energy",
      "Custom solar solutions",
      "Expert installation teams",
      "Maintenance contracts available",
    ],
  },
  {
    id: "inverter",
    title: "Solar Inverter & Battery",
    icon: "🔋",
    img: "https://plus.unsplash.com/premium_photo-1716824502431-b93e3756a6aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFNvbGFyJTIwSW52ZXJ0ZXIlMjAlMjYlMjBCYXR0ZXJ5fGVufDB8fDB8fHww",
    points: [
      "High-quality inverters",
      "Battery backup support",
      "Power during outages",
      "Safe & durable systems",
      "Compatible with all panel types",
      "Extended warranty options",
    ],
  },
  {
    id: "maintenance",
    title: "Solar Maintenance",
    icon: "🛠️",
    img: "https://plus.unsplash.com/premium_photo-1663100938344-240ec87acf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    points: [
      "Solar panel cleaning",
      "System health check",
      "Performance monitoring",
      "Fast technical support",
      "Regular inspection schedules",
      "Preventive maintenance",
    ],
  },
];

// Features / Benefits
const featuresData = [
  { icon: "⚡", title: "High Efficiency", desc: "Panels that maximize sunlight capture." },
  { icon: "🌱", title: "Eco Friendly", desc: "Reduce carbon footprint and save the planet." },
  { icon: "💰", title: "Cost Saving", desc: "Lower your electricity bills significantly." },
  { icon: "🛡️", title: "Reliable Support", desc: "24/7 customer service & maintenance." },
  { icon: "🔧", title: "Custom Solutions", desc: "Tailored systems for every roof and business." },
  { icon: "📈", title: "Performance Monitoring", desc: "Track your energy production in real-time." },
];

// Case Studies
const caseStudies = [
  { img: "https://media.istockphoto.com/id/1491032771/photo/happy-woman-installing-solar-panel-on-houses-balcony.webp?a=1&b=1&s=612x612&w=0&k=20&c=HtLUs5iFZswbP3k_JW6Jgj5bb27wp7GmvqfgaVpJ_GU=", title: "Home Rooftop Solar", desc: "Saved 40% electricity bill in first year" },
  { img: "https://images.unsplash.com/photo-1764885517746-3ae815ad728e?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Commercial Solar Panel", desc: "Efficient lighting for offices & shops" },
  { img: "https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fEluZHVzdHJpYWwlMjBTb2xhciUyMFN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D", title: "Industrial Solar System", desc: "Reliable energy for large factories" },
];

// FAQs
const faqs = [
  { q: "How long does installation take?", a: "Residential installations usually take 1–3 days. Commercial may take longer depending on size." },
  { q: "What maintenance is required?", a: "Minimal maintenance: cleaning panels and periodic inspection. We also offer maintenance plans." },
  { q: "Can I install solar on any roof?", a: "Yes, we customize solutions for all roof types and business needs." },
];

// Owners Section
const owners = [
  {
    name: "Dalip Singh",
    role: "Owner",
    phone: "7740972863",
    whatsapp: "7740972863",
    img: "https://media.istockphoto.com/id/1575126031/photo/mid-aged-business-man-working-on-laptop-computer-in-office-writing-notes.webp?a=1&b=1&s=612x612&w=0&k=20&c=j0lolQQgWJ3Tk7st4jAvIgrr33ig4z1z0mBPKOd4CSQ=",
  },
  {
    name: "Akhilesh Singh",
    role: "Owner",
    phone: "7740972863",
    whatsapp: "7740972863",
    img: "https://media.istockphoto.com/id/1190969143/photo/young-businessman-working-at-office.jpg?s=612x612&w=0&k=20&c=ZuKeaHOQVBB1wy8WmpEuxyKBy9CPyDTEC4R7zU_5Vro=",
  },
];

const Services = () => {
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-blue-700">Power Your Life with Solar Energy</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          Smart, affordable, and reliable solar solutions for your home, business, and industry. Switch to renewable energy today.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service) => (
          <div key={service.id} id={service.id} className="scroll-mt-28 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition relative group cursor-pointer transform hover:-translate-y-1 hover:scale-105 duration-500">
            <div className="h-48 w-full overflow-hidden min-h-[12rem]">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{service.icon}</span>
                <h2 className="text-2xl font-bold text-blue-600">{service.title}</h2>
              </div>
              <ul className="text-gray-600 space-y-2">
                {service.points.map((point, idx) => (<li key={idx}>• {point}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {featuresData.map((feature, idx) => (
          <div key={idx} className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition transform hover:-translate-y-1 duration-300">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseItem, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-500">
              <img src={caseItem.img} alt={caseItem.title} className="h-48 w-full object-cover min-h-[12rem]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">{caseItem.title}</h3>
                <p className="text-gray-600 mt-2">{caseItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-32 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-xl p-4 cursor-pointer" onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}>
              <h3 className="font-semibold text-blue-600">{faq.q}</h3>
              {openFAQ === idx && <p className="text-gray-600 mt-2">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Owners */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Our Owners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {owners.map((owner, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 duration-500 text-center">
              <img src={owner.img} alt={owner.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-blue-600">{owner.name}</h3>
              <p className="text-gray-600 mb-4">{owner.role}</p>
              <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
                <a href={`tel:${owner.phone}`} className="hover:text-blue-700 transition" title="Call"><FaPhoneAlt /></a>
                <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition" title="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-32 relative bg-cover bg-center rounded-3xl text-white overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="bg-black/50 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Switch to Solar & Start Saving Today</h2>
          <p className="mb-6 text-lg md:text-xl text-blue-100">
            Contact us now for a free solar consultation and join the green energy revolution.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105 duration-300">
            Get Free Quote
          </button>
        </div>
      </div>

    </div>
  );
};

export default Services;

