import {Router} from "express";
import { homeView } from "../controllers/home.js";

import shop_routes from "./shop.routes.js"

const router = Router();

router.get("/", homeView);

router.use("/shop", shop_routes);


export default router;