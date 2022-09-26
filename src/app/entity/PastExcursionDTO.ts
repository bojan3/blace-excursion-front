import { ExcursionDTO } from "./ExcursionDTO";
import { PastExcursionKey } from "./PastExcursionKey";

export class PastExcursionDTO {

  id: PastExcursionKey;
  excursion: ExcursionDTO;
  commentsCount: number;
  numberOfPersons: number;

  constructor(
    id: PastExcursionKey,
    excursion: ExcursionDTO,
    commentsCount: number,
    numberOfPersons: number
  ){
    this.id = id;
    this.excursion = excursion;
    this.commentsCount = commentsCount;
    this.numberOfPersons = numberOfPersons;
  }
}
