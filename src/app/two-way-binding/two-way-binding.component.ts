import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template:  `
  <input #myInput [(ngModel)]="name" type="text" />
{{name}}

  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  public name = "";
}
