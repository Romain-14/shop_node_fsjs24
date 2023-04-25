import {Router} from "express";
import { shopView, itemView } from "../controllers/shop.js";

const router = Router();
// si on arrive dans ce fichier on est sur // http://localhost/shop
router.get("/", shopView); // url -> /shop
router.get("/item/:id", itemView);// url -> /shop/item/:id

export default router;