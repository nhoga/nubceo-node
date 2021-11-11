import express from "express";
import morgan from "morgan";
import moviesRoutes from "./routes/movies.routes";
import tvshowsRoutes from "./routes/tvshows.routes";
import directorsRoutes from "./routes/directors.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nubceo - Node.js Technical Test");
});

app.use("/movies", moviesRoutes);
app.use("/tvshows", tvshowsRoutes);
app.use("/directors", directorsRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

export default app;
