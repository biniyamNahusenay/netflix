import express from "express"
const router = express.Router()
import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js"
import {createGenre,updateGenre,removeGenre,listGenre,readGenre} from "../controllers/genreController.js"

router.route("/").post(authenticate,authorizeAdmin,createGenre)
router.route("/:id").put(authenticate,authorizeAdmin,updateGenre)
router.route("/:id").delete(authenticate,authorizeAdmin,removeGenre)
router.route("/genres").get(listGenre)
router.route("/:id").get(readGenre)

export default router;