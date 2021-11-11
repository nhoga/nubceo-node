import { Router } from "express";
import * as directorsCtrl from "../controllers/directors.controller";
import { verifyToken } from "../middlewares/authJwt";

const router = Router();

router.get("/", directorsCtrl.getDirectors);
router.delete("/:directorId", verifyToken, directorsCtrl.deleteDirector);

export default router;
