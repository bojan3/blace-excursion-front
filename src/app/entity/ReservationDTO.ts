import { ExcursionDTO } from "./ExcursionDTO";
import { PastExcursionKey } from "./PastExcursionKey";

export class ReservationDTO {

  // id: PastExcursionKey;
  id: number;
  excursion: ExcursionDTO;
  commentsCount: number;

  constructor(
    id: number,
    excursion: ExcursionDTO,
    commentsCount: number
  ){
    this.id = id;
    this.excursion = excursion;
    this.commentsCount = commentsCount;
  }
}
