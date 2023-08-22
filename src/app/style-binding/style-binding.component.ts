import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <h1 [style.color]="'red'">Style Binding</h1>
  <h1 [style.background-color]="'red'">Style Binding</h1>
  <h1 [style.backgroundColor]="'red'">Style Binding</h1>
  <h1 [style.backgroundColor]="'red'">Style Binding</h1>
  <h1 [style]="navStyle">Style Binding</h1>
  <h1 [style.color]="styleColor">Style Binding</h1>
  <h1 [style.color]="hasError ? 'red' : 'blue'">Style Binding</h1>
   
  `,
  styles: []
})
export class StyleBindingComponent {
  public hasError = false;
  public styleColor = "orange";
   public navStyle = 'font-size:1.2rem;color:red';
}
