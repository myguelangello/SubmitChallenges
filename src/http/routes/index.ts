import { Router } from "express";
import { register } from "../controllers/students/register";

export const routes = Router();

routes.post("/students", register)
//routes.get("/students", register)