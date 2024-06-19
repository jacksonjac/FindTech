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
import session from 'express-session';

dotenv.config();








connectDB(config)

const app = express();
const server=http.createServer(app)
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(express.json()); // for parsing application/json


app.use('/api',routes(dependencies))



serverConfig(server,config).startServer()

export{
    express
}







