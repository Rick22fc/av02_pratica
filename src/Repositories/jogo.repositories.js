import { knex } from "../Database/knex.js";

class JogoRepositories{
    async getAll(){
        const jogos = await knex("jogos").select("*").returning("*")
        return jogos
    }
      async getByID(id){
        const jogosId = await knex("jogos").where({id}).select("*").returning("*")
        return jogosId
    }
      async create(data){
         const [jogos] = await knex("jogos").insert(data).returning("*")
        return jogos
      }
      async delete(id){
         const [jogos] = await knex("jogos").where({id}).delete().returning("*")
        return jogos
      }
       async patch(id,data){
         const [jogos] = await knex("jogos").where({id}).update(data).returning("*")
        return jogos
      }
    
    

}
export const jogoRepositories = new JogoRepositories()