import { Guest, GuestList } from "../interfaces/guest.interface";
import guestRepository from "../repositories/guest.repository";

async function createNew(data: Guest) {
  const result = guestRepository.insert(data);
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
