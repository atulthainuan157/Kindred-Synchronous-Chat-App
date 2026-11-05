import { Router } from "express";
import multer from "multer";
import { verifyTokens } from "../middleware/auth.middleware.js";
import {
    signup,
    login,
    getUserInfo,
    updateProfile,
    addProfileImage,
    removeProfileImage,
    logout,
} from "../controllers/auth.controller.js";



const authRoutes = Router();
const upload = multer({ dest: 'uploads/profiles/' });

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyTokens, getUserInfo);
authRoutes.post('/update-profile', verifyTokens, updateProfile);
authRoutes.post('/add-profile-image', verifyTokens, upload.single('profile-image'), addProfileImage);
authRoutes.delete('/remove-profile-image', verifyTokens, removeProfileImage);
authRoutes.post('/logout', logout);


export default authRoutes;