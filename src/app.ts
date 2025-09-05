import express = require("express");
import type { Request, Response } from "express";
import api_router from "./routes/api_routes";

const app = express();

app.use("/api", api_router);

export default app;
