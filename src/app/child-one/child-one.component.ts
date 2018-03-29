import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Output()
  onButtonClick = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onClick()  {
    this.onButtonClick.emit(' Clicked! ');
  }


}
