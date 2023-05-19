const renderProfilePage = async (ctx: any, _: any) => {
	const auth = true;
	const obj = {
		name: "Foster Z",
		username: "foster0123",
		email: "foster@foster.com"
	}
	if (auth) {
		await ctx.render("pages/account.pug", { user: ctx.session.user })
	}
	else {
		ctx.body = { error: "Access Denied" }
	}
}

const logoutAccount = async (ctx: any, _: any) => {
	ctx.redirect("/")
}
const deleteAccount = async (ctx: any, _: any) => {
	ctx.redirect("/")
}

export { renderProfilePage, logoutAccount, deleteAccount }