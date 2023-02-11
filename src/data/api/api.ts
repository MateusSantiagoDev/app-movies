import axios from "axios";
import { CardDataRequest, CardRequest, LoginRequest, UserRequest } from "../types/api-types";

axios.defaults.baseURL = "https://movies-backend-production.up.railway.app";
axios.defaults.headers.post["content-type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.statusCode === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);

export const Api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.user.email);
      console.log(response);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  createUser: async (user: UserRequest) => {
    const response = await axios.post("/user", user);
    return response.data;
  },

  creatMovie: async ({ title, image, description, avaliation }: CardRequest) => {
    const response = await axios.post("/movie", {
     title,
     image,
     description,
     avaliation,
    })
    return response.data;
  },

  getMovie: async () => {
    const response = await axios.get("/movie");
    return response.data;
  },

  deleteMovie: async (id: string) => {
    const response = await axios.delete(`/movie/${id}`);
    return response.data;
  },

  updateMovie: async (data: CardDataRequest, id: string) => {
    const response = await axios.patch(`/movie/${id}`, data);
    return response.data;
  },

  createSerie: async ({ title, image, description, avaliation }: CardRequest) => {
    const response = await axios.post("/serie", {
     title,
     image,
     description,
     avaliation,
    })
    return response.data;
  },

  getSerie: async () => {
    const response = await axios.get("/serie");
    return response.data;
  },

  deleteSerie: async (id: string) => {
    const response = await axios.delete(`/serie/${id}`);
    return response.data;
  },

  updateSerie: async (data: CardDataRequest, id: string) => {
    const response = await axios.patch(`/serie/${id}`, data);
    return response.data;
  },
};
