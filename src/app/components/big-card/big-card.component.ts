import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  imageCover: string;
  @Input()
  imageAuthor: string;
  @Input()
  authorName: string;
  @Input()
  datePost: string;
}
