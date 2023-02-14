import axios from "axios";
import {
  CardDataRequest,
  CardRequest,
  LoginRequest,
  UserRequest,
} from "../types/api-types";
import { HandleError } from '../../utils/error/error'

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
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  createUser: async (user: UserRequest) => {
    try {
      const response = await axios.post("/user", user);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  creatMovie: async ({
    title,
    image,
    description,
    avaliation,
  }: CardRequest) => {
    try {
      const response = await axios.post("/movie", {
        title,
        image,
        description,
        avaliation,
      });
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getMovie: async () => {
    try {
      const response = await axios.get("/movie");
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  deleteMovie: async (id: string) => {
    try {
      const response = await axios.delete(`/movie/${id}`);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  updateMovie: async (data: CardDataRequest, id: string) => {
    try {
      const response = await axios.patch(`/movie/${id}`, data);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  createSerie: async ({
    title,
    image,
    description,
    avaliation,
  }: CardRequest) => {
    try {
      const response = await axios.post("/serie", {
        title,
        image,
        description,
        avaliation,
      });
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getSerie: async () => {
    try {
      const response = await axios.get("/serie");
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  deleteSerie: async (id: string) => {
    try {
      const response = await axios.delete(`/serie/${id}`);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  updateSerie: async (data: CardDataRequest, id: string) => {
    try {
      const response = await axios.patch(`/serie/${id}`, data);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  createAnime: async ({
    title,
    image,
    description,
    avaliation,
  }: CardRequest) => {
    try {
      const response = await axios.post("/anime", {
        title,
        image,
        description,
        avaliation,
      });
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  getAnime: async () => {
    try {
      const response = await axios.get("/anime");
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  deleteAnime: async (id: string) => {
    try {
      const response = await axios.delete(`/anime/${id}`);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },

  updateAnime: async (data: CardDataRequest, id: string) => {
    try {
      const response = await axios.patch(`/anime/${id}`, data);
      return response.data;
    } catch (err: any) {
      HandleError({ message: err.message });
    }
  },
};
