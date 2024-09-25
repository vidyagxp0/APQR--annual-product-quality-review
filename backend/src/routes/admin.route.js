import express from "express";
import {
  adminLogin,
  signUp,
  userLogin,
  editUser,
  deleteUser,
  getAllUsers,
  resetPassword,
  getAllRoles,
  getUserPermissions,
} from "../controllers/admin.controller.js";
import { upload } from "../utils/multer.js";
import { checkJwtToken } from "../middleware/authentication.js";

const adminRouter = express.Router();

adminRouter.post("/admin-login", adminLogin);

adminRouter.post(
  "/add-user",
  checkJwtToken,
  upload.single("profile_pic"),
  signUp
);

adminRouter.post("/user-login", userLogin);

adminRouter.put(
  "/edit-user/:id",
  checkJwtToken,
  upload.single("profile_pic"),
  editUser
);

adminRouter.delete("/delete-user/:id", checkJwtToken, deleteUser);

adminRouter.get("/get-all-users", checkJwtToken, getAllUsers);

adminRouter.post("/reset-password", checkJwtToken, resetPassword);

adminRouter.get("/get-all-roles", checkJwtToken, getAllRoles);

adminRouter.get("/get-user-permissions/:id", checkJwtToken, getUserPermissions);

export default adminRouter;
