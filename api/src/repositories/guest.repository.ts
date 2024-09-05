import { prisma } from "../config/database";
import { Guest } from "../interfaces/guest.interface";

async function insert(data: Guest) {
  console.log(data)
  const result = await prisma.convidado.create({ data });
  return result;
}
async function update(data: Guest) {
  const result = await prisma.convidado.updateMany({
    where: { nomeCompleto: data.nomeCompleto },
    data: { status: data.status },
  });
  return result;
}
async function getAll() {
  const result = await prisma.convidado.findMany();
  return result;
}
const guestRepository = { insert, update, getAll };
export default guestRepository;
