import { jogoServices } from "../Services/jogo.services.js";

class JogoController{
    async getAll(req, res){
        try{
            const jogo = await jogoServices.getAll()
            return res.status(200).json(jogo)

        }catch(error){
            console.error("Erro")
            return res.status(500)
        }
    }
     async getByID(req, res){
            const jogoID= req.params.id
        try{
            const jogo = await jogoServices.getByID(jogoID)
            return res.status(200).json(jogo)

        }catch(error){
            console.error("Erro")
            return res.status(500)
        }
    }
     async create(req, res){
        try{
            const jogo = await jogoServices.create(req.body)
            return res.status(201).json(jogo)

        }catch(error){
            console.error("Erro")
            return res.status(500)
        }
    }
      async delete(req, res){
            const jogoID= req.params.id
        try{
            const jogo = await jogoServices.delete(jogoID)
            return res.status(204).json(jogo)

        }catch(error){
            console.error("Erro")
            return res.status(404)
        }
    }
      async patch(req, res){
            const jogoID = req.params.id
        try{
            const jogo = await jogoServices.patch(jogoID)
            return res.status(200).json(jogo)

        }catch(error){
            console.error("Erro")
            return res.status(404)
        }
    }

}
export const jogoController = new JogoController()