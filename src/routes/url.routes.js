import express from "express"
import { generateShortUrl, getURL } from "../controllers/url.controller.js"

const router = express.Router()

router.post("/", generateShortUrl)

router.get("/:shortId", getURL)

export default router