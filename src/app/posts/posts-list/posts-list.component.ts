import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.models';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.action';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
  }

  onDeletePost(id:string| undefined) {
    if(confirm('Are you sure you want to delete the post ?')) {
      if(id) {
        this.store.dispatch(deletePost({id}))
      }
    }
  }

}
