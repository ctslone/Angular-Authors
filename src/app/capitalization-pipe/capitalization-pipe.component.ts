import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'capitalization-pipe',
  templateUrl: './capitalization-pipe.component.html',
  styleUrls: ['./capitalization-pipe.component.css']
})
export class CapitalizationPipeComponent implements OnInit {

  userInput;

  constructor() { }

  ngOnInit(): void {
  }

}
