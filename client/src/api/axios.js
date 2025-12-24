import axios from "axios";

const api = axios.create({
  baseURL: "https://glowsense-ai.onrender.com",
});

export default api;
