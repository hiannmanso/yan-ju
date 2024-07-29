import { Guest, GuestList } from "../interfaces/guest.interface";
import { Present, PresentList } from "../interfaces/present.interface";
import presentRepository from "../repositories/present.repository";

async function createNew(data: PresentList) {
  const result = presentRepository.insertMany(data);
  return result;
}
async function updateStatus(data: Present) {
  const result = presentRepository.update(data);
  return result;
}
async function getList() {
  const result = presentRepository.getAll();
  return result;
}
const presentService = { createNew, updateStatus, getList };
export default presentService;
