import { Router } from "express";
const router = Router();

import { all } from "../controllers/admin/usuarios";
//const {index} = require("../controllers/index");

//router.get("/",index);
router.get("/",all);
export default router;
 