import { prisma } from "../config/database";
import { Guest, GuestList } from "../interfaces/guest.interface";

async function insertMany(data: GuestList) {
  const result = await prisma.convidado.createMany({ data: data.list });
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
const guestRepository = { insertMany, update, getAll };
export default guestRepository;
