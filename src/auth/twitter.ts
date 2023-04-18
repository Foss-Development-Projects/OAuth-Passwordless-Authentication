const twitterOAuthSignin = async (ctx: any, next) => {
	ctx.body = "Twitter OAuth 2.0 Signin"
}
const twitterOAuthSignup = async (ctx: any, next) => {
	ctx.body = "Twitter OAuth 2.0 Signup"
}


export { twitterOAuthSignin, twitterOAuthSignup };