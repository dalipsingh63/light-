import API from "./api";

/* =========================
   GET ALL CARDS
========================= */
export const getAllCards = () => {
  return API.get("/cards");
};

/* =========================
   ADD / UPLOAD CARD
   brand = required
   image = optional
========================= */
export const uploadCard = (formData) => {
  return API.post("/cards", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* =========================
   DELETE CARD
========================= */
export const deleteCard = (id) => {
  return API.delete(`/cards/${id}`);
};

/* =========================
   TOGGLE ACTIVE
========================= */
export const toggleActiveCard = (id) => {
  return API.patch(`/cards/active/${id}`);
};
