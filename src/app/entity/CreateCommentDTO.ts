export class CreateCommentDTO{

  text: string;
  rate: number;
  excursionId: number;

  constructor(
    text: string,
    rate: number,
    excursionId: number
  ){
    this.text = text;
    this.rate = rate;
    this.excursionId = excursionId;
  }
}
