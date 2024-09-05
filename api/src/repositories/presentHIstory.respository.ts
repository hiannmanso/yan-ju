
import { prisma } from "../config/database"
import { HistoricoPresente } from "../interfaces/present.interface"

async function insert(data:HistoricoPresente) {
    const result = await prisma.historicoPresente.create({data})
    return result
}
const presentHistoryRepository = {insert}
export default presentHistoryRepository