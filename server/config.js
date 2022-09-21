import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const URI_MONGODB = process.env.URI_MONGODB;