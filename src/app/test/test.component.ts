import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- <h1>{{"Hello "+parentData}}</h1> -->
    <h1>{{ 'Hello ' + name }}</h1>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  //  @Input() public parentData:any;
  @Input('parentData') public name: any;
  public xyz = "tarun";
  @Output() public childEvent = new EventEmitter();

  //  from child to parent we have to send data we will use event to send data

  fireEvent() {
    this.childEvent.emit('Hey Codevolution ' + this.xyz);
  }
}
