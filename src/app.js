require('dotenv').config()
const koa = require('koa')
const pug = require('koa-pug')
const serve = require('koa-static')
const route = require('@koa/router')
const json = require('koa-json')
const cors = require('@koa/cors')
const oauth = require('oauth')
const path = require('path')
const { google } = require('googleapis')

const App = new koa();
const Pug = new pug({
	viewPath: path.join(__dirname, './views'),
	app: App
})
const router = new route();
App.use(cors())
App.use(json())
App.use(serve(path.join(__dirname, './assets')))

const obj = {
	name: "Foster Z",
	username: "foster0123",
	email: "foster@foster.com"
}
const auth = true;
router.get("/", async (ctx, next) => {
	await ctx.render("pages/index.pug")
})
router.get("/profile", async (ctx, next) => {
	if(auth) {
		await ctx.render("pages/account.pug", { user:obj })
	}
	else {
		ctx.body = { error: "Access Denied"}
	}
	
})
App.use(router.routes())
App.use(router.allowedMethods());
App.listen(process.env.PORT, () => {
	console.log(`Server Running On ${process.env.HOST}:${process.env.PORT}`)
})