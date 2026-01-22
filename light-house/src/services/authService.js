import API from "./api";

// signup
export const signupUser = (formData) => {
  return API.post("/user/signup", formData);
};

// login (user + admin dono)
export const loginUser = (formData) => {
  return API.post("/user/login", formData);
};
