import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsAppButton = () => {
  const adminNumber = "917740972863"; // 91 + number
  const message = encodeURIComponent("Hello, I want to chat with you.");

  return (
    <a
      href={`https://wa.me/${adminNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      }}
    >
      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
    </a>
  );
};

export default WhatsAppButton;
