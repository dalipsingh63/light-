

import { useEffect, useState } from "react";
import {
  getAllCards,
  uploadCard,
  deleteCard,
  toggleActiveCard,
} from "../../helpers/cardsHelper";

const CardUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);

  const loadCards = async () => {
    try {
      const res = await getAllCards();
      setCards(res.data);
    } catch (err) {
      console.error("Error loading cards", err);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  // image preview
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file || !title || !description) {
      return alert("All fields are required!");
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await uploadCard(formData);
      alert("Upload successful!");
      setFile(null);
      setPreview(null);
      setTitle("");
      setDescription("");
      loadCards();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this card?")) return;
    await deleteCard(id);
    loadCards();
  };

  const handleToggleActive = async (id) => {
    await toggleActiveCard(id);
    loadCards();
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Admin Cards Upload
      </h2>

      {/* ===== Upload Form ===== */}
      <div className="bg-white border rounded-lg p-4 mb-6 max-w-xl">
        <div className="flex flex-col gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded-md p-2"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-24 object-cover rounded-md border"
            />
          )}

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2"
          />

          <button
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
          >
            Upload Card
          </button>
        </div>
      </div>

      {/* ===== Cards Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.length === 0 && (
          <p className="text-gray-500">No cards uploaded</p>
        )}

        {cards.map((card) => (
          <div
            key={card._id}
            className={`bg-white rounded-lg p-3 shadow-sm text-center border ${
              card.isActive ? "ring-4 ring-green-500" : ""
            }`}
          >
            <img
              src={card.url}
              alt={card.title}
              className="w-full h-32 object-cover rounded-md mb-2"
            />

            <h4 className="font-semibold">{card.title}</h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {card.description}
            </p>

            <div className="flex justify-center gap-2 mt-3">
              <button
                onClick={() => handleToggleActive(card._id)}
                disabled={card.isActive}
                className={`px-3 py-1 text-sm rounded-md text-white ${
                  card.isActive
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {card.isActive ? "Active" : "Set Active"}
              </button>

              <button
                onClick={() => handleDelete(card._id)}
                className="px-3 py-1 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardUpload;
