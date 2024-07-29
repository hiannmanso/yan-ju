import { PhotoList } from "../interfaces/photo.interface";
import { WeddingInformation } from "../interfaces/weddingInformation.interface";

import weddinginformationRepository from "../repositories/weddingInformation.repository";

async function createNew(data: WeddingInformation) {
  const result = weddinginformationRepository.insert(data);
  return result;
}

async function getInfos() {
  const result = weddinginformationRepository.get();
  return result;
}
const weddingInformationService = { createNew, getInfos };
export default weddingInformationService;
