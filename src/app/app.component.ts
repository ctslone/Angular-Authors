import { eventArgsObjStructure } from './like/like.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Auth';
  post = {
    title: "Title",
    isSelected: false
  };

  tweet = {
    body: "Here is the body.",
    isLiked: false,
    likeCount: 10
  }

  onSelectAlert(eventArgs: eventArgsObjStructure) {
      // alert("you liked this")
      console.log("Status: " + eventArgs.newValue)
  }

}
