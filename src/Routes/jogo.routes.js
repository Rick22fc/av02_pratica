import { jogoController } from "../Controller/jogo.controller.js";
import {Router} from "express"

export const  jogoRoutes = new Router()

jogoRoutes.get("/", jogoController.getAll)
jogoRoutes.get("/:id", jogoController.getByID)
jogoRoutes.post("/", jogoController.create)
jogoRoutes.delete("/:id", jogoController.delete)
jogoRoutes.patch("/:id", jogoController.patch)
