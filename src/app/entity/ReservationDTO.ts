import { ExcursionDTO } from "./ExcursionDTO";
import { PastExcursionKey } from "./PastExcursionKey";

export class ReservationDTO {

  id: PastExcursionKey;
  excursionDTO: ExcursionDTO;
  commentsCount: number;

  constructor(
    id: PastExcursionKey,
    excursionDTO: ExcursionDTO,
    commentsCount: number
  ){
    this.id = id;
    this.excursionDTO = excursionDTO;
    this.commentsCount = commentsCount;
  }
}
