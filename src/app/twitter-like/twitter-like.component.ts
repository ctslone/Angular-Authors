import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css']
})
export class TwitterLikeComponent {
  @Input ('isLiked') isLiked: boolean;
  @Input ('likeCount') likeCount: number;

  onClick() {
    this.isLiked = !this.isLiked;
    this.likeCount += (this.isLiked) ? 1 : -1
  }

}
