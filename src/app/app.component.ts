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
  }

  onSelectAlert(eventArgs) {
      // alert("you liked this")
      console.log("Status: " + eventArgs.newValue)
  }

}
