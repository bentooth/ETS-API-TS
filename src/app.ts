import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    // @ts-ignore
    origin: process.env.NODE_ENV == 'development' ? process.env.DEV_ORIGIN : process.env.PROD_ORIGIN
}));

export default app