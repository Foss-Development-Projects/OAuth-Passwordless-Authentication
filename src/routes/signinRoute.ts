import * as dotenv from 'dotenv'
import Router from "@koa/router";
import * as GoogleStrategy from 'passport-google-oauth2'
import passport from 'koa-passport'
import { googleOAuthSignin } from './../auth/google';

import renderSignInTab from './../controllers/signinController';

dotenv.config()

passport.use(new GoogleStrategy.Strategy({
	clientID: `${process.env.OAUTH_CLIENT_ID}`,
	clientSecret: `${process.env.OAUTH_CLIENT_SECRET}`,
	callbackURL: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/signin/auth/google/callback`,
	passReqToCallback: true
}, function (ctx: any, accessToken: any, refreshToken: any, profile: any, done: any) {
		ctx.session.user = profile;
		console.log(ctx.session.user)
}))

const router = new Router();

router.get("/signin", renderSignInTab)

router.get("/signin/auth/google", passport.authenticate('google', { scope: ['email', 'profile']}, (ctx: any) => {
	console.log(ctx.session.user);
}))

router.get("/signin/auth/google/callback", passport.authenticate('google', { successRedirect: "/profile", failureRedirect: "/signin"}))

export default router;