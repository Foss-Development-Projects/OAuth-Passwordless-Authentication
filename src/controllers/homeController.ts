const renderHomePage = async (ctx, next) => {
	await ctx.render("pages/index.pug")
}

const renderSignInTab = async (ctx, next) => {
	await ctx.render("pages/signin.pug")
}

const renderSignUpTab = async (ctx, next) => {
	await ctx.render("pages/signup.pug")
}


export { renderHomePage, renderSignInTab, renderSignUpTab };