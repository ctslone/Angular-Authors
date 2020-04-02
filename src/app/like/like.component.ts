import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({
      newValue: this.isSelected,
      when: Date.now()
    });
  }

}

export interface eventArgsObjStructure {
  newValue: boolean,
  when: Date
}
