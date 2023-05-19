import { client } from './../configs/db';
const renderHomePage = async (ctx, next) => {
	const data = await client.query("SELECT fname FROM users WHERE uname=(?)", ["Monster0123"])
	await ctx.render("pages/index.pug")
}

export { renderHomePage };