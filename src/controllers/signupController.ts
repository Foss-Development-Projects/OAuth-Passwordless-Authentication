const renderSignUpTab = async (ctx, next) => {
	await ctx.render("pages/signup.pug")
}

export default renderSignUpTab