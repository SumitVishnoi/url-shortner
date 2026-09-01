import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

export const generateShortUrl = async (url) => {
  const response = await API.post("/url", {
    url,
  });

  return response.data;
};

export const getURL = async (shortId) => {
  const response = await API.get(`/url/${shortId}`);

  return response.data;
};

export const getAnalytics = async (shortId) => {
  const response = await API.get(`/url/analytics/${shortId}`);

  return response.data;
};