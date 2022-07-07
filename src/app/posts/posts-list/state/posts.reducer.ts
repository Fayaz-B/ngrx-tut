import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { addPost } from './posts.action';

import { initialState, PostsState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state: PostsState , action) => {
    const post: Post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state: PostsState | undefined, action: any) {
  return _postsReducer(state, action);
}
