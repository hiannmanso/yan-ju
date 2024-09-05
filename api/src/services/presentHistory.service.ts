
import presentHistoryRepository from "../repositories/presentHIstory.respository"
import {  HistoricoPresente } from "../interfaces/present.interface"
import presentRepository from "../repositories/present.repository"

async function insert(data:HistoricoPresente, descricao:string){
    const infosPresent = await presentRepository.getONe(descricao)
    console.log(infosPresent)
    if(infosPresent.length <1){
        throw{
            status:400,
            message:"Item não encontrado"
        }
    }
    if(infosPresent[0].quantidade ==0){
        throw{
            status:400,
            message:"Não possuem mais desse item para ser escolhido."
        }
    }
    const count = infosPresent[0].quantidade -1
    const updateCountPresent = await presentRepository.update({...infosPresent[0],quantidade:count})
    console.log(updateCountPresent)
    const result = await presentHistoryRepository.insert(data)
    return result
}

const presentHistoryService = {insert}
export default presentHistoryService