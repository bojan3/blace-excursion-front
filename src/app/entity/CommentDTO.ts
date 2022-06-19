export class CommentDTO{

  id: number;
  clientName: string;
  text: string;
  rate: number;
  likeCount: number;
  iLiked: boolean;

  constructor(
    id: number,
    clientName: string,
    text: string,
    rate: number,
    likeCount: number,
    iLiked: boolean
  ){
    this.id = id;
    this.clientName = clientName;
    this.text = text;
    this.rate = rate;
    this.likeCount = likeCount;
    this.iLiked = iLiked;
  }

}
