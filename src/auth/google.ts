const googleOAuthSignin = async (ctx: any, next) => {
 ctx.body = "Google OAuth 2.0 Signin"
}

const googleOAuthSignup = async (ctx: any, next) => {
 ctx.body = "Google OAuth 2.0 Signup"
}

export { googleOAuthSignin, googleOAuthSignup };