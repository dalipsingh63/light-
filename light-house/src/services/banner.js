// import API from "./api";

// // GET all banner images
// export const getAllBanners = () => {
//   return API.get("/banner-images");
// };

// // Upload new banner image (admin)
// export const uploadBanner = (formData) => {
//   return API.post("/banner-images", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };


import API from "./api";

// GET all banner images
export const getAllBanners = () => {
  return API.get("/banner-images");
};

// Upload new banner image (admin)
export const uploadBanner = (formData) => {
  return API.post("/banner-images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// DELETE a banner image by ID
export const deleteBanner = (id) => {
  return API.delete(`/banner-images/${id}`);
};

// SET a banner image as active
export const setActiveBanner = (id) => {
  return API.patch(`/banner-images/set-active/${id}`);
};
