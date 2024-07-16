import express from "express"
const router = express.Router()

import {authenticate,authorizeAdmin} from "../middlewares/authMiddleware.js"
import checkId from "../middlewares/checkId.js"
import {createMovie,getAllMovies,getSpecificMovie,updateMovie,
  movieReview,deleteMovie,deleteComment,newMovie,getTopMovie,randomMovies} from "../controllers/movieController.js"

router.get("/all-movies",getAllMovies)
router.get("/specific-movie/:id",getSpecificMovie)
router.post("/create-movie", authenticate,authorizeAdmin,createMovie)
router.put("/update-movie/:id",authenticate,authorizeAdmin,updateMovie)
router.post("/:id/reviews",authenticate,checkId,movieReview)
router.delete("/delete-movie/:id",authenticate,authorizeAdmin,deleteMovie)
router.delete("/delete-comment",authenticate,authorizeAdmin,deleteComment)
router.get("/new-movie",newMovie)
router.get("/top-movies",getTopMovie)
router.get("/random-movies",randomMovies)

export default router;