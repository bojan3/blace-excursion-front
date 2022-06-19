import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentDTO } from 'src/app/entity/CommentDTO';
import { UserService } from 'src/app/service';
import { ExcursionService } from 'src/app/service/excursion.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  excursionId !: number;
  comments: CommentDTO[] = [];
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private excursionService: ExcursionService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
      this.route.params.subscribe((param) => {
      this.excursionId = param.excursionId;
      console.log("id excursion :" +this.excursionId);
      });

      // this.userService.getMyInfo().subscribe();
      // console.log(this.userService.currentUser);
      this.excursionService.getComments(this.excursionId).subscribe((comments) => (this.comments = comments));
  }

}
