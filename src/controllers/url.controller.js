import URL from "../models/url.model.js";
import shortid from "shortid";

export const generateShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const shortId = shortid();
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "url is required",
      });
    }

    await URL.create({
      shortId,
      redirectURL: url,
      visitHistory: [],
    });

    return res.status(201).json({
      success: true,
      message: "URL created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "generate url error",
    });
  }
};

export const getURL = async (req, res) => {
  try {
    const { shortId } = req.params;
    console.log(shortId);
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: { visitHistory: { timestamp: Date.now() } },
      },
    );

    if (!entry) {
      return res
        .status(404)
        .json({ success: false, message: "entry not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "fetched url successfully", entry });
  } catch (error) {
    return res.status(500).json({ 
        success: false, 
        message: "get url error"
     });
  }
};
