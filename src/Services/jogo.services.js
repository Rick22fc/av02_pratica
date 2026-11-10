import { jogoRepositories } from "../Repositories/jogo.repositories.js";

class JogoServices{
    async getAll(){
        const jogo = await jogoRepositories.getAll()
        return jogo
    }
    async getByID(id){
        const jogo = await jogoRepositories.getByID(id)
        return jogo
    }
    async create(date){
        const jogo = await jogoRepositories.create(date)
        return jogo
    }
    async delete(id){
        const jogo = await jogoRepositories.delete(id)
        return jogo
    }
    async patch(id,data){
        const jogo = await jogoRepositories.update(id,data)
        return jogo
    }

}
export const jogoServices = new JogoServices()