import { Post } from 'src/app/models/posts.models'


export interface PostsState {
  posts: Post[];
}


export const initialState = {
  posts: [
    {
      id: '1',
      title: 'Sample title 1',
      description: 'Sample description 1'
    },
    {
      id: '2',
      title: 'Sample title 2',
      description: 'Sample description 2'
    }
  ]
}