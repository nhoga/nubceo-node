import { Router } from "express";
import * as tvshowsCtrl from "../controllers/tvshows.controller";
import { verifyToken } from "../middlewares/authJwt";

const router = Router();

router.get("/", tvshowsCtrl.getTvShows);
router.post("/", verifyToken, tvshowsCtrl.createTvShow);
router.get("/:tvshowId", tvshowsCtrl.getTvShowByID);
router.get("/:tvshowId/episodes", tvshowsCtrl.getEpisode);
router.put("/:tvshowId", verifyToken, tvshowsCtrl.updateTvShows);
router.delete("/:tvshowId", verifyToken, tvshowsCtrl.deleteTvShows);

export default router;
