import { CommentDTO } from '../models/comment.dto';
import { CommentsDataService } from '../comments-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../components/users/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { PostDTO } from '../../models/post.dto';
import { NotificatorService } from '../../../core/services/notificator.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent implements OnInit {
  @Input() post: PostDTO;
  public haveComments = false;
  public user: User;

  constructor(
    private readonly commentsDataService: CommentsDataService,
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService
  ) {}

  public ngOnInit() {
    this.authService.loggedUser$.subscribe((res) => (this.user = res));
  }

  public createComment(content: any) {
    this.commentsDataService.createComment(this.post.id, content).subscribe(
      (res) => {
        this.post.comments = [res, ...this.post.comments];
        this.haveComments = true;
      },
      (errors) => {
        this.notificator.error('Could not create comment');
      }
    );
  }

  public removeComment(commentToBeDeleted: CommentDTO) {
    const index = this.post.comments.indexOf(commentToBeDeleted);
    this.post.comments.splice(index, 1);
  }
}
