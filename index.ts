import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";


mongoose.connect("mongodb+srv://saartauri:suemasuema@cluster0.xlqpkpr.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', articleController)
app.use('/', commentController)
app.use('/', authorController)


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});