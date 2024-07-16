import express from "express"
import {createUser,loginUser,logOutUser,getAllUsers,getCurrentUserProfile,updateUserProfile} from "../controllers/userController.js"
import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js"
const router = express.Router()

router.route("/").post(createUser).get(authenticate,authorizeAdmin,getAllUsers)
router.post("/login",loginUser)
router.post("/logout",logOutUser)
router.route("/profile").get(authenticate,getCurrentUserProfile).put(authenticate,updateUserProfile)

export default router