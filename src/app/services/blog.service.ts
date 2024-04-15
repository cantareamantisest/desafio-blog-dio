import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, forkJoin, map } from 'rxjs';
import { User } from '../models/user.interface';
import { Post } from '../models/post.interface';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  private readonly postUrl: string = 'https://dummyjson.com/posts';
  private readonly userUrl: string = 'https://dummyjson.com/users';
  private readonly imageUrl: string = 'https://picsum.photos/id';

  postBigCard$ = this.getPosts(1, 1).pipe(
    concatMap((posts) =>
      forkJoin(
        posts.map((post) =>
          this.getUser(post.userId).pipe(
            concatMap((user) =>
              this.getImageCover(post.id).pipe(
                map(
                  (image) =>
                    ({
                      ...post,
                      postUser: {
                        ...user,
                      },
                      postImage: {
                        ...image,
                      },
                    } as Post)
                )
              )
            )
          )
        )
      )
    )
  );

  postsSmallCard$ = this.getPosts(2, 4).pipe(
    concatMap((posts) =>
      forkJoin(
        posts.map((post) =>
          this.getUser(post.userId).pipe(
            concatMap((user) =>
              this.getImageCover(post.id).pipe(
                map(
                  (image) =>
                    ({
                      ...post,
                      postUser: {
                        ...user,
                      },
                      postImage: {
                        ...image,
                      },
                    } as Post)
                )
              )
            )
          )
        )
      )
    )
  );

  postsMediumCard$ = this.getPosts(6, 6).pipe(
    concatMap((posts) =>
      forkJoin(
        posts.map((post) =>
          this.getUser(post.userId).pipe(
            concatMap((user) =>
              this.getImageCover(post.id).pipe(
                map(
                  (image) =>
                    ({
                      ...post,
                      postUser: {
                        ...user,
                      },
                      postImage: {
                        ...image,
                      },
                    } as Post)
                )
              )
            )
          )
        )
      )
    )
  );

  private getPosts(skip: number, limit: number): Observable<Post[]> {
    return this.http
      .get<any>(`${this.postUrl}/?skip=${skip}&limit=${limit}`)
      .pipe(
        map((response) =>
          response.posts.map(
            (post: any) =>
              <Post>{
                id: post.id,
                title: post.title,
                body: post.body,
                userId: post.userId,
              }
          )
        )
      );
  }

  private getUser(id: number): Observable<User> {
    return this.http.get<any>(`${this.userUrl}/${id}`).pipe(
      map(
        (user) =>
          ({
            fullName: `${user.firstName} ${user.lastName}`,
            image: user.image,
            birthDate: user.birthDate,
          } as User)
      )
    );
  }

  private getImageCover(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.imageUrl}/${id}/info`);
  }
}
