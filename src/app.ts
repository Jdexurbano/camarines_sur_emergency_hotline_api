import express = require("express");
import type { Request, Response } from "express";
import api_router from "./routes/api_routes";
import cors_middleware from "./middlewares/cors_middleware";

const app = express();

//use CORS middleware
app.use(cors_middleware);

app.use("/api", api_router);

export default app;
