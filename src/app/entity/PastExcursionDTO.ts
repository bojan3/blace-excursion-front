import { ExcursionDTO } from "./ExcursionDTO";
import { PastExcursionKey } from "./PastExcursionKey";

export class PastExcursionDTO {

  id: PastExcursionKey;
  excursionDTO: ExcursionDTO;
  commentsCount: number;
  numberOfPersons: number;

  constructor(
    id: PastExcursionKey,
    excursionDTO: ExcursionDTO,
    commentsCount: number,
    numberOfPersons: number
  ){
    this.id = id;
    this.excursionDTO = excursionDTO;
    this.commentsCount = commentsCount;
    this.numberOfPersons = numberOfPersons;
  }
}
