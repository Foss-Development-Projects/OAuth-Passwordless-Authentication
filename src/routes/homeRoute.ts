import Router from "@koa/router";
import { renderHomePage } from "../controllers/homeController";

const router = new Router();

router.get("/", renderHomePage)

export default router;