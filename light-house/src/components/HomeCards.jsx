import React, { useEffect, useState } from "react";
import { getAllCards } from "../services/cardsHelper";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null); // clicked card
  const [expandedCard, setExpandedCard] = useState(null); // Read More
  const navigate = useNavigate();

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const res = await getAllCards();
      const activeCards = res.data.filter((c) => c.isActive);
      setCards(activeCards);
    } catch (err) {
      console.error("Card load error", err);
    }
  };

  const handleFree = () => {
    navigate("/my-bookings");
  };

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 p-0 m-0">
      {/* 🔹 Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mt-2 mb-4 tracking-wide">
        <span className="text-[#0a1f44]">꧁⪻♥</span>
        <span className="text-[#f59e0b] mx-1">Ҏɹօ𝓭ʊcτ</span>
        <span className="text-[#0a1f44]">♥⪼꧂</span>
      </h2>

      {/* 🧩 Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card._id}
            className="relative bg-white border rounded-2xl flex flex-col overflow-hidden cursor-pointer transition-all duration-300 ease-out shadow-md hover:shadow-xl"
            onClick={() =>
              setActiveCard(activeCard === card._id ? null : card._id)
            }
          >
            {/* 🖼 Image */}
            {card.imageUrl && (
              <div className="h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.brand}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {/* 📦 Content */}
            <div className="flex flex-col flex-1 p-4 sm:p-5">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#0a1f44]">
                  {card.brand}
                </h3>

                {card.title && (
                  <p className="text-sm font-medium mt-1 text-gray-800">
                    {card.title}
                  </p>
                )}

                {card.description && (
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {expandedCard === card._id
                      ? card.description
                      : card.description.length > 100
                      ? card.description.slice(0, 100) + "..."
                      : card.description}
                  </p>
                )}

                {card.description && card.description.length > 100 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleReadMore(card._id);
                    }}
                    className="text-blue-600 text-xs mt-1 underline"
                  >
                    {expandedCard === card._id ? "Show Less" : "Read More"}
                  </button>
                )}

                {card.price && (
                  <div className="mt-2 font-bold text-gray-900">
                    ₹ {card.price}
                  </div>
                )}
              </div>

              {/* ✅ FREE Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFree();
                }}
                className="mt-4 bg-green-600 text-white w-full py-2.5 rounded-xl font-semibold tracking-wide hover:bg-green-500 transition active:scale-95"
              >
                FREE
              </button>
            </div>

            {/* 🌀 Modal-Style Pop */}
            {activeCard === card._id && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-110 animate-scaleIn">
                  {/* Image */}
                  {card.imageUrl && (
                    <div className="h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src={card.imageUrl}
                        alt={card.brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-[#0a1f44]">
                      {card.brand}
                    </h3>
                    {card.title && (
                      <p className="text-sm mt-1 text-gray-700">{card.title}</p>
                    )}
                    {card.description && (
                      <p className="text-sm mt-2 text-gray-600">{card.description}</p>
                    )}
                    {card.price && (
                      <div className="mt-2 font-bold text-gray-900">
                        ₹ {card.price}
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setActiveCard(null);
                        handleFree();
                      }}
                      className="mt-4 bg-green-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-green-500 transition active:scale-95"
                    >
                      FREE
                    </button>

                    <button
                      onClick={() => setActiveCard(null)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 font-bold text-lg"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
