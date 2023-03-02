import express from "express";
import router from './routes/index.routes.js';
import cors from 'cors';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: true}))

//cors
app.use((req, res, next) => {
    console.log(`Path ${req.path} with Method ${req.method}`);
    next();
});

//routes
app.use(router);


export default app;