import Router from "@koa/router";

import { renderHomePage, renderSignInTab, renderSignUpTab } from "../controllers/homeController";

import googleOAuth from './../auth/google';
import twitterOAuth from './../auth/twitter';
import facebookOAuth from './../auth/facebook';
import microsoftOAuth from './../auth/microsoft';

const router = new Router();

router.get("/", renderHomePage)

router.get("/signin", renderSignInTab)

router.get("/signup", renderSignUpTab)

router.post("/twitter", googleOAuth)

router.post("/twitter", twitterOAuth)

router.post("/microsoft", microsoftOAuth)

router.post("/facebook", facebookOAuth)

export default router;