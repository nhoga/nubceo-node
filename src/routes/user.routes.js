import { Router } from "express";
import * as usersCtrl from "../controllers/users.controller";
import { verifyToken } from "../middlewares/authJwt";

const router = Router();

router.get("/", usersCtrl.getUsers);
router.delete("/:userId", verifyToken, usersCtrl.deleteUsers);

export default router;
