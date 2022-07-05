import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/models/posts.models';
import { PostsState } from './posts.state';


const getPostsState = createFeatureSelector<PostsState>('posts');


export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts
})