import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { PostsDataService } from '../../post/services/posts-data.service';
import { Injectable } from '@angular/core';
import { Post } from '../../common/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SinglePostResolver implements Resolve<any> {
  constructor(
    private readonly router: Router,
    private readonly postsService: PostsDataService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    const id = route.paramMap.get('id');

    return this.postsService.getPostById(id).pipe(
      map(post => {
        if (post) {
          return post;
        } else {
          this.router.navigate(['/not-found']);
          return;
        }
      })
    );
  }
}
