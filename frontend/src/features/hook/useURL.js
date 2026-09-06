import { generateShortUrl, getAnalytics, getURL } from "../services/url.api";

export const useURL = () => {
  const handleGenerateShortUrl = async (url) => {
    const data = await generateShortUrl(url);
    console.log(data);
    return data;
  };

  const handleGetURL = async (shortId) => {
    const data = await getURL(shortId);
    console.log(data.entry);
    return data.entry;
  };

  const handleGetAnalytics = async (shortId) => {
    const data = await getAnalytics(shortId);
    console.log(data);
    return data;
  };
  return {
    handleGenerateShortUrl,
    handleGetURL,
    handleGetAnalytics,
  };
};
