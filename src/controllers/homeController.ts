const renderHomePage = async (ctx, next) => {
	await ctx.render("pages/index.pug")
}

const twitterOAuth = async (ctx: any, next) => {
	ctx.body = 'Twitter OAuth Is Coming Soon'
}
const microsoftOAuth = async (ctx: any, next) => {
	ctx.body = 'MicroSoft OAuth Is Coming Soon'
}
const facebookOAuth = async (ctx: any, next) => {
	ctx.body = 'Facebook OAuth Is Coming Soon'
}

export { renderHomePage, twitterOAuth, microsoftOAuth, facebookOAuth }