import Router from '@koa/router'

const router = new Router();


const googleOAuthSignin = async (ctx: any, next) => {
 router.redirect("/")
}

const googleOAuthSignup = async (ctx: any, next) => {
 ctx.body = "Google OAuth 2.0 Signup"
}

export { googleOAuthSignin, googleOAuthSignup };