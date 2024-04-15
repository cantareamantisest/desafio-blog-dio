import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrl: './medium-card.component.css',
})
export class MediumCardComponent {
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
