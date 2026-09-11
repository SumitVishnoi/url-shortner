import {
  generateShortUrl,
  getAnalytics,
  getURL,
} from "../services/url.api";

export const useURL = () => {
  const handleGenerateShortUrl = async (url) => {
    const data = await generateShortUrl(url);

    console.log("GENERATE RESPONSE:", data);

    return data;
  };

  const handleGetURL = async (shortId) => {
    const data = await getURL(shortId);

    console.log("GET URL RESPONSE:", data);

    return data.entry;
  };

  const handleGetAnalytics = async (shortId) => {
    const data = await getAnalytics(shortId);

    console.log("ANALYTICS RESPONSE:", data);

    return data;
  };

  return {
    handleGenerateShortUrl,
    handleGetURL,
    handleGetAnalytics,
  };
};