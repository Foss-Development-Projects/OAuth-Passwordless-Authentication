import Router from "@koa/router";

import { deleteAccount, logoutAccount, renderProfilePage } from './../controllers/profileController';

const router = new Router();

router.get("/profile", renderProfilePage)

router.post("/profile/logout", logoutAccount)

router.post("/profile/account", deleteAccount)

export default router;