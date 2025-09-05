import express from "express";
import { api_handler } from "../controllers/api_controller";

const api_router = express.Router();

api_router.route("/").get(api_handler);

export default api_router;
