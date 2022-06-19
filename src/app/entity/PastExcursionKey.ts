export class PastExcursionKey{

  clientId: number;
  excursionId: number;

  constructor(
    clientId: number,
    excursionId: number
  ){
    this.clientId = clientId;
    this.excursionId = excursionId;
  }
}
