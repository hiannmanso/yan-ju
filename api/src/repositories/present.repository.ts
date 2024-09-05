import { Present } from "./../interfaces/present.interface";
import { prisma } from "../config/database";

async function insert(data: Present) {
  const result = await prisma.presente.create({ data });
  return result;
}
async function update(data: Present) {
  const result = await prisma.presente.updateMany({
    where: { descricao: data.descricao },
    data,
  });
  
  return result;
}
async function getAll() {
  const result = await prisma.presente.findMany();
  return result;
}
async function getONe(descricao:string) {
  const result = await prisma.presente.findMany({where:{descricao}});
  return result;
}
const presentRepository = { insert, update, getAll,getONe };
export default presentRepository;
