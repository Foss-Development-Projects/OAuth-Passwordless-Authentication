import * as dotenv from 'dotenv';
import * as url from 'url';
import path from 'path';
import Koa from 'koa';
import Router from '@koa/router';
import KoaPug from 'koa-pug/dist';
import json from 'koa-json';
import Session from 'koa-session'
import cors from '@koa/cors';
import serve from 'koa-static';

import homeRoutes from './routes/homeRoute';
import profileRoutes from './routes/profileRoute';
import signinRoutes from './routes/signinRoute';
import signupRoutes from './routes/signupRoute';

import server from './configs/server';
import { sessionConfig } from './configs/session';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()
const App = new Koa();
const Pug = new KoaPug({
	viewPath: path.join(__dirname, './views'),
	app: App
})
const router = new Router();
App.keys = [`${process.env.SESSION_KEY}`]
App.use(cors())
App.use(json())
App.use(Session(sessionConfig, App))
App.use(serve(path.join(__dirname, './assets')))
App.use(serve(path.join(__dirname, '../', './public')))
App.use(homeRoutes.routes())
App.use(signinRoutes.routes())
App.use(signupRoutes.routes())
App.use(profileRoutes.routes())
App.use(router.routes())
App.use(router.allowedMethods());
App.listen(process.env.PORT, server);