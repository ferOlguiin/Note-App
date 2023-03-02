import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || process.env.API_PORT;
export const URI_MONGODB = process.env.URI_MONGODB;