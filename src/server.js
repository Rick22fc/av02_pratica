import express from "express";
import {jogoRoutes} from "./Routes/jogo.routes.js"

const app = express();
const port = 3000

app.use(express.json())
app.use("/jogos",jogoRoutes)

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})