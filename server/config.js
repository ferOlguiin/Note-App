import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || process.env.API_PORT;
export const URI_MONGODB = process.env.URI_MONGODB;
export const EMAIL_INTEGRAL = process.env.EMAIL_INTEGRAL;
export const EMAIL_PASS_INTEGRAL = process.env.EMAIL_PASS_INTEGRAL;