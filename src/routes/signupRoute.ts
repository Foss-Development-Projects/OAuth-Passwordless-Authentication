import Router from "@koa/router";

import { googleOAuthSignup } from './../auth/google';
import { twitterOAuthSignup } from './../auth/twitter';
import { facebookOAuthSignup } from './../auth/facebook';
import { microsoftOAuthSignup } from './../auth/microsoft';

import renderSignUpTab from './../controllers/signupController';

const router = new Router();

router.get("/signup", renderSignUpTab)

router.post("/signup/google", googleOAuthSignup)

router.post("/signup/twitter", twitterOAuthSignup)

router.post("/signup/facebook", facebookOAuthSignup)

router.post("/signup/microsoft", microsoftOAuthSignup)

export default router;