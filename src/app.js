require('dotenv').config()
const koa = require('koa')
const pug = require('koa-pug')
const serve = require('koa-static')
const route = require('@koa/router')
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
App.use(serve(path.join(__dirname, './assets')))


router.get("/", async (ctx, next) => {
	await ctx.render("pages/index.pug")
})
router.get("/profile", async (ctx, next) => {
	await ctx.render("pages/account.pug")
})
App.use(router.routes())
App.use(router.allowedMethods());
App.listen(process.env.PORT, () => {
	console.log(`Server Running On ${process.env.HOST}:${process.env.PORT}`)
})