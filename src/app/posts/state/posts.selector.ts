import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { PostsState } from './posts.state';


const getPostsState = createFeatureSelector<PostsState>('posts');


export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts
})

// export const getPostsById  = createSelector(getPostsState, (state:any, props:any) => {
//   return state.posts.find((post: Post) => post.id == props.id)
// })

export const getPostsById = (id: string) => createSelector(getPostsState, (state) => {
  return state.posts.find((post: Post) => post.id == id) || null;
})