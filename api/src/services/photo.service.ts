import { PhotoList } from "../interfaces/photo.interface";

import photoRepository from "../repositories/photo.repository";

async function createNew(data: PhotoList) {
  const result = photoRepository.insertMany(data);
  return result;
}

async function getList() {
  const result = photoRepository.getAll();
  return result;
}
const photoService = { createNew, getList };
export default photoService;
