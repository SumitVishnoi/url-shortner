import URL from "../models/url.model.js";
import shortid from "shortid";


export const generateShortUrl = async (req, res) => {
    try {
        const {url} = req.body;
        const shortId = shortid()
        if(!url) {
            return res.status(400).json({
                success: false,
                message: "url is required"
            })
        }
        
        await URL.create({
            shortId,
            redirectURL: url,
            visitHistory: []
        })

        return res.status(201).json({
            success: true,
            message: "URL created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "generate url error",
            error: error.message
        })
    }
}

