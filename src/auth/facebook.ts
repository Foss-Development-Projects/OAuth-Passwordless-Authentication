const facebookOAuthSignin = async (ctx: any, next) => {
	ctx.body = "Facebook OAuth 2.0 Signin"
}
const facebookOAuthSignup = async (ctx: any, next) => {
	ctx.body = "Facebook OAuth 2.0 Signup"
}


export { facebookOAuthSignin, facebookOAuthSignup };