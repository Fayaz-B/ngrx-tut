import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { addPost, deletePost, updatePost } from './posts.action';

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
  }),
  on(updatePost, (state: PostsState, action) => {
    const updatedPost = state.posts.map(post => {
      return post.id == action.post.id ? action.post : post
    })

    return {
      ...state,
      posts: updatedPost
    }
  }),
  on(deletePost, (state, {id}) => {
    const filteredPost = state.posts.filter(post => {
      return post.id != id
    })

    return {
      ...state, 
      posts: filteredPost
    }
  })
);

export function postsReducer(state: PostsState | undefined, action: any) {
  return _postsReducer(state, action);
}
