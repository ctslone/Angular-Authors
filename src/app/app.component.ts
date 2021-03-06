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

  courses = ["Angular", "CSS"]

  viewMode = "map"

  classes = [
    {id: 1, name: "Geology"},
    {id: 2, name: "JavaScript"},
    {id: 3, name: "CSS"},
  ]

  otherClasses;

  onAdd() { 
    this.classes.push({id: 4, name:"Blockchain"})
  }

  loadClasses() {
    this.otherClasses = [
      {id: 1, name: "GIS"},
      {id: 2, name: "HTML"},
      {id: 3, name: "Back End Dev"},
    ]
  }

  trackClass(classes) {
    return classes ? classes.id : undefined
  }

  onSelectAlert(eventArgs: eventArgsObjStructure) {
      // alert("you liked this")
      console.log("Status: " + eventArgs.newValue)
  }

}
