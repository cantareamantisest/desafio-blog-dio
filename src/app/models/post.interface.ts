import { User } from './user.interface';
import { Image } from './image.interface';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  postUser: User;
  postImage: Image;
}
