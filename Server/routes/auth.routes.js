import { Router } from "express";
import { getUserInfo, login, signup, updateProfile } from "../controllers/auth.controller.js";
import { verifyTokens } from "../middleware/auth.middleware.js";



const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyTokens, getUserInfo);
authRoutes.post('/update-profile', verifyTokens, updateProfile)


export default authRoutes;