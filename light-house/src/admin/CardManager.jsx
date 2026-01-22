// import { useEffect, useState } from "react";
// import {
//   getAllCards,
//   uploadCard,
//   deleteCard,
//   toggleActiveCard,
// } from "../services/cardsHelper";

// const CardManager = () => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const [brand, setBrand] = useState(""); // 🔴 REQUIRED
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [type, setType] = useState("");
//   const [price, setPrice] = useState("");

//   const [cards, setCards] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const loadCards = async () => {
//     try {
//       const res = await getAllCards();
//       setCards(res.data);
//     } catch (err) {
//       console.error("Error loading cards", err);
//     }
//   };

//   useEffect(() => {
//     loadCards();
//   }, []);

//   const handleFileChange = (e) => {
//     const selected = e.target.files[0];
//     setFile(selected || null);
//     if (selected) setPreview(URL.createObjectURL(selected));
//     else setPreview(null);
//   };

//   const handleUpload = async () => {
//     // 🔴 only brand is mandatory
//     if (!brand) {
//       alert("Brand is required!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("brand", brand);

//     if (title) formData.append("title", title);
//     if (description) formData.append("description", description);
//     if (capacity) formData.append("capacity", capacity);
//     if (type) formData.append("type", type);
//     if (price) formData.append("price", price);
//     if (file) formData.append("image", file);

//     try {
//       setUploading(true);
//       await uploadCard(formData);
//       alert("Card uploaded successfully!");

//       // reset form
//       setBrand("");
//       setTitle("");
//       setDescription("");
//       setCapacity("");
//       setType("");
//       setPrice("");
//       setFile(null);
//       setPreview(null);

//       loadCards();
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this card?")) return;
//     try {
//       await deleteCard(id);
//       loadCards();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleToggleActive = async (id) => {
//     try {
//       await toggleActiveCard(id);
//       loadCards();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Upload Card (Admin)</h2>

//       {/* ===== Upload Form ===== */}
//       <div style={{ marginBottom: "20px" }}>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             style={{
//               width: "120px",
//               height: "80px",
//               objectFit: "cover",
//               marginLeft: "10px",
//             }}
//           />
//         )}

//         <input
//           type="text"
//           placeholder="Brand (required)"
//           value={brand}
//           onChange={(e) => setBrand(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Title (optional)"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Description (optional)"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Capacity (e.g. 5kW)"
//           value={capacity}
//           onChange={(e) => setCapacity(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Type (On-grid / Off-grid)"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           style={{ display: "block", marginTop: "10px" }}
//         />

//         <button onClick={handleUpload} disabled={uploading}>
//           {uploading ? "Uploading..." : "Upload Card"}
//         </button>
//       </div>

//       {/* ===== Cards List ===== */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {cards.length === 0 && <p>No cards found</p>}

//         {cards.map((card) => (
//           <div
//             key={card._id}
//             style={{
//               width: "220px",
//               border: card.isActive ? "3px solid green" : "1px solid #ccc",
//               padding: "10px",
//             }}
//           >
//             {card.imageUrl && (
//               <img
//                 src={card.imageUrl}
//                 alt={card.brand}
//                 style={{ width: "100%", height: "120px", objectFit: "cover" }}
//               />
//             )}

//             <h4>{card.brand}</h4>
//             {card.title && <p>{card.title}</p>}
//             {card.capacity && <p>Capacity: {card.capacity}</p>}
//             {card.type && <p>Type: {card.type}</p>}
//             {card.price && <p>₹ {card.price}</p>}

//             <button
//               onClick={() => handleToggleActive(card._id)}
//               disabled={card.isActive}
//             >
//               {card.isActive ? "Active" : "Set Active"}
//             </button>

//             <button onClick={() => handleDelete(card._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardManager;



import { useEffect, useState } from "react";
import {
  getAllCards,
  uploadCard,
  deleteCard,
  toggleActiveCard,
} from "../services/cardsHelper";

const CardManager = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const [cards, setCards] = useState([]);
  const [uploading, setUploading] = useState(false);

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

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected || null);
    if (selected) setPreview(URL.createObjectURL(selected));
    else setPreview(null);
  };

  const handleUpload = async () => {
    if (!brand) {
      alert("Brand is required!");
      return;
    }

    const formData = new FormData();
    formData.append("brand", brand);
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (capacity) formData.append("capacity", capacity);
    if (type) formData.append("type", type);
    if (price) formData.append("price", price);
    if (file) formData.append("image", file);

    try {
      setUploading(true);
      await uploadCard(formData);
      alert("Card uploaded successfully!");

      setBrand("");
      setTitle("");
      setDescription("");
      setCapacity("");
      setType("");
      setPrice("");
      setFile(null);
      setPreview(null);

      loadCards();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
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
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Card Manager
      </h2>

      {/* ===== Upload Form ===== */}
      <div className="bg-white border rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 w-32 h-20 object-cover rounded-md"
              />
            )}
          </div>

          <input
            type="text"
            placeholder="Brand (required)"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border rounded-md p-2"
          />

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

          <input
            type="text"
            placeholder="Capacity (e.g. 5kW)"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="border rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Type (On-grid / Off-grid)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-md p-2"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`mt-4 px-6 py-2 rounded-md text-white font-semibold
            ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {uploading ? "Uploading..." : "Upload Card"}
        </button>
      </div>

      {/* ===== Cards Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.length === 0 && <p>No cards found</p>}

        {cards.map((card) => (
          <div
            key={card._id}
            className={`border rounded-lg p-3 shadow-sm ${
              card.isActive ? "ring-4 ring-green-500" : ""
            }`}
          >
            {card.imageUrl && (
              <img
                src={card.imageUrl}
                alt={card.brand}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
            )}

            <h4 className="font-semibold">{card.brand}</h4>
            {card.title && <p className="text-sm">{card.title}</p>}
            {card.capacity && (
              <p className="text-sm">Capacity: {card.capacity}</p>
            )}
            {card.type && <p className="text-sm">Type: {card.type}</p>}
            {card.price && (
              <p className="font-semibold text-green-700">
                ₹ {card.price}
              </p>
            )}

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleToggleActive(card._id)}
                disabled={card.isActive}
                className={`flex-1 text-sm px-2 py-1 rounded-md text-white
                  ${
                    card.isActive
                      ? "bg-green-600 cursor-default"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {card.isActive ? "Active" : "Set Active"}
              </button>

              <button
                onClick={() => handleDelete(card._id)}
                className="flex-1 text-sm px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white"
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

export default CardManager;
