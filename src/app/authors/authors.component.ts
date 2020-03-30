import { Component, OnInit } from '@angular/core';
// imported author service
import { AuthorsService } from '../authors.service'

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // setting a blank field to hold authors
  authors;
  // this const takes a service of AuthorsService and populates this.authors with the getAuthors method from the service
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
