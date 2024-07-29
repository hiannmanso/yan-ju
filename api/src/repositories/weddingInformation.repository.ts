import { WeddingInformation } from "./../interfaces/weddingInformation.interface";
import { prisma } from "../config/database";

async function insert(data: WeddingInformation) {
  const result = await prisma.infosCasamento.create({ data });
  return result;
}

async function get() {
  const result = await prisma.infosCasamento.findMany();
  return result;
}

const weddinginformationRepository = { insert, get };
export default weddinginformationRepository;
