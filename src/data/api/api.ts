import axios from "axios";
import { CardDataRequest, CardRequest, LoginRequest, ProfileRequest, UserRequest } from "../types/api-types";

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

  createAnime: async ({ title, image, description, avaliation }: CardRequest) => {
    const response = await axios.post("/anime", {
     title,
     image,
     description,
     avaliation,
    })
    return response.data;
  },

  getAnime: async () => {
    const response = await axios.get("/anime");
    return response.data;
  },

  deleteAnime: async (id: string) => {
    const response = await axios.delete(`/anime/${id}`);
    return response.data;
  },

  updateAnime: async (data: CardDataRequest, id: string) => {
    const response = await axios.patch(`/anime/${id}`, data);
    return response.data;
  },

  createPorfile: async ({ userEmail, movie, serie, anime }: ProfileRequest) => {
    try {
      const response = await axios.post("/profiles", {
        userEmail,
        movie:[movie],
        serie:[serie],
        anime:[anime],
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getProfile: async (id: string) => {
    const response = await axios.get(`profiles/${id}`);
    return response.data;
  },

  getMovieId: async (id: string) => {
    const response = await axios.get(`movie/${id}`);
    return response.data;
  },

  getSerieId: async (id: string) => {
    const response = await axios.get(`serie/${id}`);
    return response.data;
  },

  getAnimeId: async (id: string) => {
    const response = await axios.get(`anime/${id}`);
    return response.data;
  }
};
