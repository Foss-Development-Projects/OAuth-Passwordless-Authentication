const microsoftOAuthSignin = async (ctx: any, next) => {
	ctx.body = "Microsoft OAuth 2.0 Signin"
}
const microsoftOAuthSignup = async (ctx: any, next) => {
	ctx.body = "Microsoft OAuth 2.0 Signup"
}


export { microsoftOAuthSignin, microsoftOAuthSignup };