import * as dotenv from 'dotenv';
import * as url from 'url';
import path from 'path';
import Koa from 'koa';
import Router from '@koa/router';
import KoaPug from 'koa-pug/dist';
import json from 'koa-json';
import cors from '@koa/cors';
import serve from 'koa-static';
import { google } from 'googleapis';

import { facebookOAuth, microsoftOAuth, renderHomePage, twitterOAuth } from './controllers/homeController';
import { deleteAccount, logoutAccount, renderProfilePage } from './controllers/profileController';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()
const App = new Koa();
const Pug = new KoaPug({
	viewPath: path.join(__dirname, './views'),
	app: App
})
const router = new Router();
App.use(cors())
App.use(json())
App.use(serve(path.join(__dirname, './assets')))
App.use(serve(path.join(__dirname, '../', './public')))

router.get("/", renderHomePage)
router.get("/profile", renderProfilePage)

router.post("/profile/logout", logoutAccount)
router.post("/profile/account", deleteAccount)

router.post("/twitter", twitterOAuth)
router.post("/microsoft", microsoftOAuth)
router.post("/facebook", facebookOAuth)



App.use(router.routes())
App.use(router.allowedMethods());
App.listen(process.env.PORT, () => {
	console.log(`Server Running On ${process.env.HOST}:${process.env.PORT}`)
})