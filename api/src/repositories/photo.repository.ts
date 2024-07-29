import { PhotoList } from "./../interfaces/photo.interface";
import { prisma } from "../config/database";

async function insertMany(data: PhotoList) {
  const result = await prisma.foto.createMany({ data: data.list });
  return result;
}

async function getAll() {
  const result = await prisma.foto.findMany();
  return result;
}
const photoRepository = { insertMany, getAll };
export default photoRepository;
