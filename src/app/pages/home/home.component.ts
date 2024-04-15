import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly blogService: BlogService) {}
  titleBlog: string = 'Mais um Blog Aleatório';
  bigCard$ = this.blogService.postBigCard$;
  smallCard$ = this.blogService.postsSmallCard$;
  mediumCard$ = this.blogService.postsMediumCard$;
}
