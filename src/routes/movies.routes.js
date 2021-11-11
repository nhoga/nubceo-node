import { Router } from "express";
import * as moviesCtrl from "../controllers/movies.controller";
import { verifyToken } from "../middlewares/authJwt";
const router = Router();

router.get("/", moviesCtrl.getMovies);
router.get("/alph", moviesCtrl.getMoviesAlphabetical);
router.post("/", verifyToken, moviesCtrl.createMovie);
router.get("/:movieId", moviesCtrl.getMovieByID);
router.get("/:movieId/production", moviesCtrl.getProductionCompanies);
router.put("/:movieId", verifyToken, moviesCtrl.updateMovie);
router.delete("/:movieId", verifyToken, moviesCtrl.deleteMovie);

export default router;
