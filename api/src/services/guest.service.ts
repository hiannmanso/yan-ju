import { Guest, GuestList } from "../interfaces/guest.interface";
import guestRepository from "../repositories/GUEST.repository";

async function createNew(data: GuestList) {
  const result = guestRepository.insertMany(data);
  return result;
}
async function updateStatus(data: Guest) {
  const result = guestRepository.update(data);
  return result;
}
async function getList() {
  const result = guestRepository.getAll();
  return result;
}
const guestService = { createNew, updateStatus, getList };
export default guestService;
