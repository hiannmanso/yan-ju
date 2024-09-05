
import { Present } from "../interfaces/present.interface";
import presentRepository from "../repositories/present.repository";

async function createNew(data: Present) {
  const result = await presentRepository.insert(data);
  return result;
}
async function updateStatus(data: Present) {
  const result = await presentRepository.update(data);
  return result;
}
async function getList() {
  const result = await presentRepository.getAll();
  return result;
}
const presentService = { createNew, updateStatus, getList };
export default presentService;
