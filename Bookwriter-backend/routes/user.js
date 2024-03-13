// user routes
import express from "express";
import user from "../controllers/user.js";

const router = express.Router();

router.get("/user", user.getUser);
router.get("/user/get_all_users", user.getAllusers);
router.put("/user/:id", user.updateUser);
router.delete("/user/:id", user.deleteUser);

export default router;
