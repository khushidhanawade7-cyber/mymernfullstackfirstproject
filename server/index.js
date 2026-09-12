import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import UserRouter from './routes/UserRouter.js';
import path from 'path';
import ItemRouter from './routes/ItemRoutes.js';
import AdminRouter from './routes/AdminRouter.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 2000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
  console.log("DB connected successfully");
  app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
  });
}).catch(error => console.log(error));


app.use('/api/user', UserRouter);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/item", ItemRouter);
app.use("/api/admin", AdminRouter );