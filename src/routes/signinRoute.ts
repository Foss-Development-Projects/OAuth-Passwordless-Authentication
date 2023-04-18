import Router from "@koa/router";

import { googleOAuthSignin } from './../auth/google';
import { twitterOAuthSignin } from './../auth/twitter';
import { facebookOAuthSignin } from './../auth/facebook';
import { microsoftOAuthSignin } from './../auth/microsoft';

import renderSignInTab from './../controllers/signinController';

const router = new Router();

router.get("/signin", renderSignInTab)

router.post("/signin/google", googleOAuthSignin)

router.post("/signin/twitter", twitterOAuthSignin)

router.post("/signin/facebook", facebookOAuthSignin)

router.post("/signin/microsoft", microsoftOAuthSignin)

export default router;