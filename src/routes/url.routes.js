import express from "express"
import { generateShortUrl, getAnalytics, getURL } from "../controllers/url.controller.js"

const router = express.Router()

router.post("/", generateShortUrl)

router.get("/:shortId", getURL)

router.get("/analytics/:shortId", getAnalytics)

export default router