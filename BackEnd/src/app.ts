import http from 'http'
import express ,{Request,Response}from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from '../Config/Db.connect'
import config from '../Config/Config'
import dotenv from 'dotenv';
import serverConfig from './server';
import dependencies from './Framework/Confiq/Dependencies';
import { routes } from './Adaptors/Routers';


dotenv.config();
const appPass = process.env.APP_PASS;
console.log('App Password:', appPass);




dotenv.config();

connectDB(config)
dotenv.config()
const app = express();
const server=http.createServer(app)
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

console.log("app page")


app.use('/api',routes(dependencies))



serverConfig(server,config).startServer()

export{
    express
}







