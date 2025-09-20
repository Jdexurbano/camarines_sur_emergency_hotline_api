import cors, { CorsOptions } from "cors";

//list of all allowed origins
const allowed_origins = [process.env.FRONTEND_DEV_URL];

//handle CORS for the frontend
const cors_options: CorsOptions = {
  origin: (origin, callback) => {
    //check the origin if it's allowed and also allowed if there is no origin for API testing like postman
    if (allowed_origins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin} not allowed`));
    }
  },
  methods: ["GET"],
};

export default cors(cors_options);
