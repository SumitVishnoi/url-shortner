import express from "express"
import { generateShortUrl } from "../controllers/url.controller.js"

const router = express.Router()

router.post("/", generateShortUrl)

export default router