import { Present, PresentList } from "./../interfaces/present.interface";
import { prisma } from "../config/database";

async function insertMany(data: PresentList) {
  const result = await prisma.presente.createMany({ data: data.list });
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
const presentRepository = { insertMany, update, getAll };
export default presentRepository;
