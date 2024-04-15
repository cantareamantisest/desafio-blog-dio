import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  constructor() {}

  @Input()
  title: string;
  @Input()
  imageCover: string;
  @Input()
  imageAuthor: string;
  @Input()
  authorName: string;
  @Input()
  datePost: string;
}
