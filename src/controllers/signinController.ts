const renderSignInTab = async (ctx, next) => {
	await ctx.render("pages/signin.pug")
}

export default renderSignInTab