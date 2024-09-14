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

const adminRouter = express.Router();

adminRouter.post("/admin-login", adminLogin);

adminRouter.post("/add-user", upload.single("profile_pic"), signUp);

adminRouter.post("/user-login", userLogin);

adminRouter.put("/edit-user/:id", upload.single("profile_pic"), editUser);

adminRouter.delete("/delete-user/:id", deleteUser);

adminRouter.get("/get-all-users", getAllUsers);

adminRouter.post("/reset-password", resetPassword);

adminRouter.get("/get-all-roles", getAllRoles);

adminRouter.get("/get-user-permissions/:id", getUserPermissions);

export default adminRouter;
