import { CommentEndToken } from '@angular/compiler/src/ml_parser/tokens';
import { Component, Input, OnInit } from '@angular/core';
import { CommentDTO } from 'src/app/entity/CommentDTO';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment!: CommentDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
